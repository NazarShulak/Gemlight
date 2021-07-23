module.exports = {
    post: {
        tags: ['User CRUD operations'],
        description: "Create user",
        operationId: "create user",
        parameters: [],
        requestBody: {
            content: {
                'application/json': {
                    schema: {
                        $ref: '#/components/schemas/User'
                    }
                }
            }
        },
        responses: {
            '201': {
                description: "User created successfully"
            },
            '500': {
                description: 'Server error'
            }
        }
    }
};
