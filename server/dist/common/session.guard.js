"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AppError_1 = require("./error/AppError");
class SessionGuard {
    canActivate(context) {
        const httpContext = context.switchToHttp();
        const request = httpContext.getRequest();
        try {
            if (request.session.passport.user) {
                return true;
            }
        }
        catch (e) {
            throw new AppError_1.AppError(0);
        }
    }
}
exports.SessionGuard = SessionGuard;
//# sourceMappingURL=session.guard.js.map