(function() {
  // UTM Tracker Script - Captura e armazena parâmetros UTM em cookies
  
  function setCookie(name, value, days) {
    const expires = new Date();
    expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
    document.cookie = name + '=' + value + ';expires=' + expires.toUTCString() + ';path=/';
  }
  
  function getCookie(name) {
    const nameEQ = name + '=';
    const ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }
  
  function getUrlParams() {
    const urlParams = new URLSearchParams(window.location.search);
    return {
      utm_source: urlParams.get('utm_source'),
      utm_medium: urlParams.get('utm_medium'),
      utm_campaign: urlParams.get('utm_campaign'),
      utm_term: urlParams.get('utm_term'),
      utm_content: urlParams.get('utm_content'),
      gclid: urlParams.get('gclid'),
      fbclid: urlParams.get('fbclid')
    };
  }
  
  function trackUTMParams() {
    const urlParams = getUrlParams();
    let hasUTMParams = false;
    
    // Verifica se há parâmetros UTM na URL atual
    Object.keys(urlParams).forEach(key => {
      if (urlParams[key]) {
        hasUTMParams = true;
        setCookie(key, urlParams[key], 90); // 90 dias de validade
      }
    });
    
    // Se não há parâmetros UTM na URL, mantém os cookies existentes
    if (!hasUTMParams) {
      Object.keys(urlParams).forEach(key => {
        const existingValue = getCookie(key);
        if (existingValue) {
          // Mantém o cookie existente por mais 90 dias
          setCookie(key, existingValue, 90);
        }
      });
    }
  }
  
  // Função global para obter UTMs dos cookies (usada pelos botões CTA)
  window.getUTMParams = function() {
    return {
      utm_source: getCookie('utm_source'),
      utm_medium: getCookie('utm_medium'),
      utm_campaign: getCookie('utm_campaign'),
      utm_term: getCookie('utm_term'),
      utm_content: getCookie('utm_content'),
      gclid: getCookie('gclid'),
      fbclid: getCookie('fbclid')
    };
  };
  
  // Função para gerenciar teste A/B de headlines
  function initializeHeadlineTest() {
    let variant = getCookie('headline_variant');
    
    if (!variant) {
      // Gera aleatoriamente A, B ou C (distribuição igual)
      const variants = ['a', 'b', 'c'];
      variant = variants[Math.floor(Math.random() * variants.length)];
      setCookie('headline_variant', variant, 90);
    }
    
    return variant;
  }
  
  // Função global para obter a variante atual do headline
  window.getHeadlineVariant = function() {
    return getCookie('headline_variant') || 'a';
  };
  
  // Função global para construir URL com UTMs e headline variant
  window.buildURLWithUTMs = function(baseUrl) {
    const utmParams = window.getUTMParams();
    const headlineVariant = window.getHeadlineVariant();
    const url = new URL(baseUrl);
    
    Object.keys(utmParams).forEach(key => {
      if (utmParams[key]) {
        url.searchParams.set(key, utmParams[key]);
      }
    });
    
    // Adiciona a variante do headline para métricas
    if (headlineVariant) {
      url.searchParams.set('headline', headlineVariant);
    }
    
    return url.toString();
  };
  
  // Executa o tracking quando a página carrega
  trackUTMParams();
  
  // Inicializa o teste A/B de headlines
  initializeHeadlineTest();
})();