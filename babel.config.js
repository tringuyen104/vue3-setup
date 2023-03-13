module.exports = function (api) {
    api.cache(true);

    // const presets = [ ... ];
    const plugins = ['@vue/babel-plugin-jsx'];

    if (process.env['ENV'] === 'prod') {
        //   plugins.push(...);
    }

    return {
        // presets,
        plugins,
    };
};
