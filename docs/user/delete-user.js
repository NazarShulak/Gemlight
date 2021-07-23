module.exports = {
    delete: {
        tags: ['Todo CRUD operations'],
        description: "Deleting a user",
        operationId: "delete user",
        parameters: [
            {
                name: "id",
                in: "path",
                schema: {
                    $ref: "#/components/schemas/id"
                },
                required: true
            }
        ],
        responses: {
            '200': {
                description: "User deleted successfully"
            },
            '404': {
                description: "User not found"
            },
            '500': {
                description: "Server error"
            }
        }
    }
};