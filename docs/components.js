module.exports = {
    components: {
        schemas: {
            id: {
                type: "string",
                description: "identifier of object",
                example: "1313"

            },

            User: {
                type: 'object',
                properties: {
                    name: {
                        type: 'string',
                        description: "User number",
                        example: "test"
                    },
                    age: {
                        type: 'number',
                        description: "Users`s age",
                        example: 20
                    },
                    email: {
                        type: "string",
                        description: "User`s email",
                        example: "example@test.co"
                    },
                    password: {
                        type: "string",
                        description: "User`s password",
                        example: "12345"
                    }
                }
            },

            Product: {
                type: 'object',
                properties: {
                    productId: {
                        type: "number",
                        description: "Product identification id",
                        example: 100
                    },
                    userId: {
                        type: 'number',
                        description: "User identification id",
                        example: 20
                    },
                    title: {
                        type: "string",
                        description: "Product name",
                        example: "Example product"
                    },
                    description: {
                        type: "string",
                        description: "Product description",
                        example: "Product characteristics"
                    },
                    price: {
                        type: "number",
                        description: "Product price",
                        example: 1000
                    },
                    quantity: {
                        type: "number",
                        description: "Quantity of product",
                        example: 10
                    }
                }
            },

            Review: {
                type: 'object',
                properties: {
                    productId: {
                        type: "number",
                        description: "Product identification id",
                        example: 100
                    },
                    userId: {
                        type: 'number',
                        description: "User identification id",
                        example: 20
                    },
                    reviewBody: {
                        type: "string",
                        description: "Content of review",
                        example: "Some opinion on some product"
                    }
                }
            }
        }
    }
};
