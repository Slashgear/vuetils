export const withBeforeAfter = (
  methodsToEnhance,
  { onBeforeEach = () => {}, onAfterEach = () => {} } = {}
) => {
  if (!methodsToEnhance || methodsToEnhance.length === 0) {
    return {};
  }

  return Object.entries(methodsToEnhance).reduce(
    (enhancedMethods, [methodName, method]) => ({
      ...enhancedMethods,
      [methodName]: async function mapped(...args) {
        await onBeforeEach();
        await method.apply(this, args);
        await onAfterEach();
      }
    }),
    {}
  );
};
