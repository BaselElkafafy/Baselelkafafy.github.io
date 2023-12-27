const importModuleA = async () => {
  const module = await import('./ModuleA');
  return module;
};

const importModuleB = async () => {
  const module = await import('./ModuleB');
  return module;
};

document.getElementById('loadModuleAButton')?.addEventListener('click', async () => {
  const moduleA = await importModuleA();
  moduleA.doSomething();
});

document.getElementById('loadModuleBButton')?.addEventListener('click', async () => {
  const moduleB = await importModuleB();
  moduleB.doSomethingElse();
});
