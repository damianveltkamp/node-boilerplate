import moduleInit from '@javascript/utilities/module-init';

moduleInit('[js-hook-module-test]', 'foo', () =>
  import('@components/test/javascript/test'),
);
