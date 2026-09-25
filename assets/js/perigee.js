(function () {
  'use strict';

  var root = document.documentElement;
  var STORAGE_KEY = 'perigee-theme';
  var ORDER = ['system', 'light', 'dark'];
  var darkQuery = window.matchMedia('(prefers-color-scheme: dark)');

  function applyTheme(pref) {
    root.dataset.themePref = pref;
    root.dataset.theme = pref === 'system' ? (darkQuery.matches ? 'dark' : 'light') : pref;
    document.querySelectorAll('[data-pg-theme-switch]').forEach(function (button) {
      var label = button.getAttribute('data-label-' + pref);
      button.setAttribute('aria-label', label);
      button.setAttribute('title', label);
    });
  }

  function initThemeSwitch() {
    applyTheme(root.dataset.themePref || 'system');
    darkQuery.addEventListener('change', function () {
      if (root.dataset.themePref === 'system') applyTheme('system');
    });
    document.querySelectorAll('[data-pg-theme-switch]').forEach(function (button) {
      button.addEventListener('click', function () {
        var next = ORDER[(ORDER.indexOf(root.dataset.themePref) + 1) % ORDER.length];
        try { localStorage.setItem(STORAGE_KEY, next); } catch (e) {}
        applyTheme(next);
      });
    });
  }

  function initMenu() {
    var header = document.querySelector('[data-pg-header]');
    var toggle = header && header.querySelector('[data-pg-menu-toggle]');
    if (!toggle) return;

    function setOpen(open) {
      header.toggleAttribute('data-pg-menu-open', open);
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', toggle.getAttribute(open ? 'data-label-close' : 'data-label-open'));
    }

    toggle.addEventListener('click', function () {
      setOpen(!header.hasAttribute('data-pg-menu-open'));
    });
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && header.hasAttribute('data-pg-menu-open')) {
        setOpen(false);
        toggle.focus();
      }
    });
  }

  function initDropdowns() {
    var dropdowns = document.querySelectorAll('[data-pg-dropdown]');
    document.addEventListener('click', function (event) {
      dropdowns.forEach(function (dropdown) {
        if (dropdown.open && !dropdown.contains(event.target)) dropdown.open = false;
      });
    });
    document.addEventListener('keydown', function (event) {
      if (event.key !== 'Escape') return;
      dropdowns.forEach(function (dropdown) {
        if (dropdown.open) {
          dropdown.open = false;
          dropdown.querySelector('summary').focus();
        }
      });
    });
  }

  function initTabs() {
    document.querySelectorAll('[data-pg-tabs]').forEach(function (root) {
      var tabs = Array.prototype.slice.call(root.querySelectorAll('[role="tab"]'));
      var panels = Array.prototype.slice.call(root.querySelectorAll('[role="tabpanel"]'));

      function select(index) {
        tabs.forEach(function (tab, i) {
          tab.setAttribute('aria-selected', String(i === index));
          tab.tabIndex = i === index ? 0 : -1;
          panels[i].hidden = i !== index;
        });
      }

      tabs.forEach(function (tab, index) {
        tab.addEventListener('click', function () { select(index); });
        tab.addEventListener('keydown', function (event) {
          var delta = event.key === 'ArrowRight' ? 1 : event.key === 'ArrowLeft' ? -1 : 0;
          if (event.key === 'Home') { select(0); tabs[0].focus(); return; }
          if (event.key === 'End') { select(tabs.length - 1); tabs[tabs.length - 1].focus(); return; }
          if (!delta) return;
          event.preventDefault();
          var next = (index + delta + tabs.length) % tabs.length;
          select(next);
          tabs[next].focus();
        });
      });
    });
  }

  function initToc() {
    var toc = document.querySelector('.pg-prose #markdown-toc');
    if (!toc) return;
    var label = document.body.dataset.pgTocLabel || 'Contents';
    var details = document.createElement('details');
    details.className = 'pg-toc';
    details.open = true;
    var summary = document.createElement('summary');
    summary.textContent = label;
    toc.classList.add('pg-toc__list');
    toc.removeAttribute('id');
    details.appendChild(summary);
    details.appendChild(toc.cloneNode(true));
    toc.parentNode.replaceChild(details, toc);
  }

  function copyToClipboard(text) {
    if (navigator.clipboard && window.isSecureContext) return navigator.clipboard.writeText(text);
    var textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    try { document.execCommand('copy'); } catch (e) {}
    document.body.removeChild(textarea);
    return Promise.resolve();
  }

  function initCodeBlocks() {
    var copyLabel = document.body.dataset.pgCopyLabel || 'Copy';
    var copyDoneLabel = document.body.dataset.pgCopyDoneLabel || 'Copied';

    document.querySelectorAll('.pg-prose pre').forEach(function (pre) {
      var wrapper = pre.closest('.highlighter-rouge');
      var match = wrapper && wrapper.className.match(/language-(\S+)/);
      var lang = match ? match[1] : '';

      var toolbar = document.createElement('div');
      toolbar.className = 'pg-code-toolbar';

      var langLabel = document.createElement('span');
      langLabel.className = 'pg-code-lang';
      langLabel.textContent = lang;
      toolbar.appendChild(langLabel);

      var button = document.createElement('button');
      button.type = 'button';
      button.className = 'pg-code-copy';
      button.textContent = copyLabel;
      button.addEventListener('click', function () {
        copyToClipboard(pre.innerText).then(function () {
          button.dataset.copied = 'true';
          button.textContent = copyDoneLabel;
          setTimeout(function () {
            delete button.dataset.copied;
            button.textContent = copyLabel;
          }, 1500);
        });
      });
      toolbar.appendChild(button);

      pre.parentNode.insertBefore(toolbar, pre);
    });
  }

  initThemeSwitch();
  initMenu();
  initDropdowns();
  initTabs();
  initToc();
  initCodeBlocks();
})();
