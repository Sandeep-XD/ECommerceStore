class ApiResponse extends Error{
    constructor(message,statusCode,data){
        super(message);
        this.statusCode = statusCode;
        this.success = true;
        this.data = data;
    }
}

export {
    ApiResponse
}