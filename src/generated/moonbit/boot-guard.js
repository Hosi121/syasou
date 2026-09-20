(() => {
  const _M0FP37Hosi1216syasou11boot__guard6listen = callback => window.addEventListener('error', callback, true);
  const _M0FP37Hosi1216syasou11boot__guard10is__script = event => event.target instanceof HTMLScriptElement;
  const _M0FP37Hosi1216syasou11boot__guard12script__type = event => event.target.type;
  const _M0FP37Hosi1216syasou11boot__guard17show__boot__error = () => { document.documentElement.dataset.bootError = 'true' };
  (() => {
    _M0FP37Hosi1216syasou11boot__guard6listen((event) => {
      if (_M0FP37Hosi1216syasou11boot__guard10is__script(event) && _M0FP37Hosi1216syasou11boot__guard12script__type(event) === "module") {
        _M0FP37Hosi1216syasou11boot__guard17show__boot__error();
        return;
      } else {
        return;
      }
    });
  })();
})();
