"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const dotenv = __importStar(require("dotenv"));
dotenv.config();
// ENV variables 
// - AWS_ACCESS_KEY_ID
// - AWS_SECRET_ACCESS_KEY
// Are Also needed
// export const config = {
//   username: `${process.env.POSTGRES_USERNAME}`,
//   password: process.env.POSTGRES_PASSWORD,
//   database: process.env.POSTGRES_DB,
//   host: process.env.POSTGRES_HOST,
//   aws_region: process.env.AWS_REGION,
//   AWS_DEFAULT_REGION: process.env.AWS_DEFAULT_REGION,
//   aws_profile: process.env.AWS_PROFILE,
//   aws_media_bucket: process.env.AWS_BUCKET,
//   url: process.env.URL,
//   jwt: {
//     secret: process.env.JWT_SECRET,
//   },
//   accessKeyId : process.env.AWS_ACCESS_KEY_ID,
//   secretAccessKey : process.env.AWS_SECRET_ACCESS_KEY
// };
exports.config = {
    username: "postgres",
    password: "postgres",
    database: "postgres",
    host: "udagramdb.cpmbomf1vmkr.us-east-1.rds.amazonaws.com",
    aws_region: "",
    AWS_DEFAULT_REGION: "",
    aws_profile: "",
    aws_media_bucket: "",
    url: "http://localhost:8080",
    jwt: {
        secret: "hello",
    },
    accessKeyId: "",
    secretAccessKey: ""
};
//# sourceMappingURL=config.js.map