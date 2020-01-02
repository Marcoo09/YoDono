"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
class AppError extends Error {
    constructor(errorCode) {
        super();
        const errorMessageConfig = this.getError(errorCode);
        if (!errorMessageConfig) {
            throw new Error('Unable to find message code error.');
        }
        Error.captureStackTrace(this, this.constructor);
        this.name = this.constructor.name;
        this.httpStatus = errorMessageConfig.httpStatus;
        this.errorCode = errorCode;
        this.errorMessage = errorMessageConfig.errorMessage;
        this.userMessage = errorMessageConfig.userMessage;
    }
    getError(errorCode) {
        let res;
        switch (errorCode) {
            case 0:
                res = {
                    type: 0,
                    httpStatus: common_1.HttpStatus.UNAUTHORIZED,
                    errorMessage: 'No Session',
                    userMessage: 'Session Expired',
                };
                break;
        }
        return res;
    }
}
exports.AppError = AppError;
//# sourceMappingURL=AppError.js.map