module.exports = {
    finalFieldsOrder: (product, ...fields) => {
        const fieldsOrderEntries = Object.entries(...fields);
        let fieldsReplacer = [];

        fieldsOrderEntries.forEach((value) => fieldsReplacer[value[1]] = value[0])

        return JSON.parse(JSON.stringify(product, fieldsReplacer, 4));
    }
};
