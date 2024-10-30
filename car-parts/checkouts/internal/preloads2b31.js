
    (function() {
      var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
      var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/polyfills-legacy.D6S_e7yr.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/app-legacy.rrwbSOYz.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/OnePage-legacy.D33IqaYs.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/DeliveryMethodSelectorSection-legacy.AcFOfcsI.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/useUnauthenticatedErrorModal-legacy.CsIURp6S.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/LegacyVaultedShippingMethods-legacy.D_xTZ7Uc.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/Rollup-legacy.Bb_qMbIV.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/SubscriptionPriceBreakdown-legacy.Beaw4Odm.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/RageClickCapture-legacy.DNigmOKG.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/ShopPayLogo-legacy.DusBEpux.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/PurchaseOptionsAgreement-legacy.CRZDMCWZ.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/PickupPointCarrierLogo-legacy.B_npLMwz.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/hooks-legacy.BJxNjGGN.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/VaultedPayment-legacy.CO7ZpUkC.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/OnePageModal-legacy.CTKI_QtH.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/useShowShopPayOptin-legacy.DGoaqDd5.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/Section-legacy.vBM3iP5x.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/useGooglePaySdk-legacy.BEQC0AyK.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/ShopPayLoginLoader-legacy.B_8wKdHF.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/publishMessage-legacy.DMkvwjZb.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/PayButtonSection-legacy.D4qA0pPf.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/context-legacy.CQG4jLIR.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/DutyOptions-legacy.kiE15BAH.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/useAmazonContact-legacy.D89IHv6u.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/StockProblemsLineItemList-legacy.Dx_Nyzrz.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/component-ShopPayVerificationSwitch-legacy.JnQQKH25.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/index-legacy.ByRsDHWe.js"];
      var styles = [];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = [];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [baseURL].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res, next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        })();
      }

      function onLoaded() {
        preconnectAssets();
        prefetchAssets();
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  