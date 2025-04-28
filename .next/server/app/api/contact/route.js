/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/contact/route";
exports.ids = ["app/api/contact/route"];
exports.modules = {

/***/ "(rsc)/./app/api/contact/route.ts":
/*!**********************************!*\
  !*** ./app/api/contact/route.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nodemailer */ \"(rsc)/./node_modules/nodemailer/lib/nodemailer.js\");\n\n\nasync function POST(request) {\n    try {\n        const { name, email, message } = await request.json();\n        // Basic validation\n        if (!name || !email || !message) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: 'Name, email, and message are required'\n            }, {\n                status: 400\n            });\n        }\n        // Create Gmail transporter\n        const transporter = nodemailer__WEBPACK_IMPORTED_MODULE_1__.createTransport({\n            service: 'gmail',\n            auth: {\n                user: process.env.EMAIL_USER,\n                pass: process.env.EMAIL_PASS\n            }\n        });\n        // Email content\n        const mailOptions = {\n            from: process.env.EMAIL_USER,\n            to: process.env.EMAIL_USER,\n            replyTo: email,\n            subject: `Portfolio Contact: ${name}`,\n            text: `Name: ${name}\\nEmail: ${email}\\nMessage: ${message}`,\n            html: `\n        <div style=\"font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;\">\n          <h2 style=\"color: #0ea5e9;\">New Contact Form Submission</h2>\n          <p><strong>Name:</strong> ${name}</p>\n          <p><strong>Email:</strong> ${email}</p>\n          <p><strong>Message:</strong></p>\n          <div style=\"background-color: #f9f9f9; padding: 15px; border-left: 4px solid #0ea5e9; margin-top: 10px;\">\n            ${message.replace(/\\n/g, '<br>')}\n          </div>\n        </div>\n      `\n        };\n        try {\n            await transporter.sendMail(mailOptions);\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                message: 'Email sent successfully'\n            });\n        } catch (error) {\n            console.error('Error sending email:', error);\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: 'Failed to send email. Please try again later.'\n            }, {\n                status: 500\n            });\n        }\n    } catch (error) {\n        console.error('Error:', error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: 'An unexpected error occurred'\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2NvbnRhY3Qvcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTJDO0FBQ1A7QUFFN0IsZUFBZUUsS0FBS0MsT0FBZ0I7SUFDekMsSUFBSTtRQUNGLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEVBQUVDLE9BQU8sRUFBRSxHQUFHLE1BQU1ILFFBQVFJLElBQUk7UUFFbkQsbUJBQW1CO1FBQ25CLElBQUksQ0FBQ0gsUUFBUSxDQUFDQyxTQUFTLENBQUNDLFNBQVM7WUFDL0IsT0FBT04scURBQVlBLENBQUNPLElBQUksQ0FDdEI7Z0JBQUVDLE9BQU87WUFBd0MsR0FDakQ7Z0JBQUVDLFFBQVE7WUFBSTtRQUVsQjtRQUVBLDJCQUEyQjtRQUMzQixNQUFNQyxjQUFjVCx1REFBMEIsQ0FBQztZQUM3Q1csU0FBUztZQUNUQyxNQUFNO2dCQUNKQyxNQUFNQyxRQUFRQyxHQUFHLENBQUNDLFVBQVU7Z0JBQzVCQyxNQUFNSCxRQUFRQyxHQUFHLENBQUNHLFVBQVU7WUFDOUI7UUFDRjtRQUVBLGdCQUFnQjtRQUNoQixNQUFNQyxjQUFjO1lBQ2xCQyxNQUFNTixRQUFRQyxHQUFHLENBQUNDLFVBQVU7WUFDNUJLLElBQUlQLFFBQVFDLEdBQUcsQ0FBQ0MsVUFBVTtZQUMxQk0sU0FBU2xCO1lBQ1RtQixTQUFTLENBQUMsbUJBQW1CLEVBQUVwQixNQUFNO1lBQ3JDcUIsTUFBTSxDQUFDLE1BQU0sRUFBRXJCLEtBQUssU0FBUyxFQUFFQyxNQUFNLFdBQVcsRUFBRUMsU0FBUztZQUMzRG9CLE1BQU0sQ0FBQzs7O29DQUd1QixFQUFFdEIsS0FBSztxQ0FDTixFQUFFQyxNQUFNOzs7WUFHakMsRUFBRUMsUUFBUXFCLE9BQU8sQ0FBQyxPQUFPLFFBQVE7OztNQUd2QyxDQUFDO1FBQ0g7UUFFQSxJQUFJO1lBQ0YsTUFBTWpCLFlBQVlrQixRQUFRLENBQUNSO1lBQzNCLE9BQU9wQixxREFBWUEsQ0FBQ08sSUFBSSxDQUFDO2dCQUFFRCxTQUFTO1lBQTBCO1FBQ2hFLEVBQUUsT0FBT0UsT0FBTztZQUNkcUIsUUFBUXJCLEtBQUssQ0FBQyx3QkFBd0JBO1lBQ3RDLE9BQU9SLHFEQUFZQSxDQUFDTyxJQUFJLENBQ3RCO2dCQUFFQyxPQUFPO1lBQWdELEdBQ3pEO2dCQUFFQyxRQUFRO1lBQUk7UUFFbEI7SUFDRixFQUFFLE9BQU9ELE9BQU87UUFDZHFCLFFBQVFyQixLQUFLLENBQUMsVUFBVUE7UUFDeEIsT0FBT1IscURBQVlBLENBQUNPLElBQUksQ0FDdEI7WUFBRUMsT0FBTztRQUErQixHQUN4QztZQUFFQyxRQUFRO1FBQUk7SUFFbEI7QUFDRiIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxraGFuZFxcT25lRHJpdmVcXERlc2t0b3BcXFBvcnRmb2xpb1xcUG9ydGZvbGlvXFxhcHBcXGFwaVxcY29udGFjdFxccm91dGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSAnbmV4dC9zZXJ2ZXInO1xyXG5pbXBvcnQgbm9kZW1haWxlciBmcm9tICdub2RlbWFpbGVyJztcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcXVlc3Q6IFJlcXVlc3QpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgeyBuYW1lLCBlbWFpbCwgbWVzc2FnZSB9ID0gYXdhaXQgcmVxdWVzdC5qc29uKCk7XHJcblxyXG4gICAgLy8gQmFzaWMgdmFsaWRhdGlvblxyXG4gICAgaWYgKCFuYW1lIHx8ICFlbWFpbCB8fCAhbWVzc2FnZSkge1xyXG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXHJcbiAgICAgICAgeyBlcnJvcjogJ05hbWUsIGVtYWlsLCBhbmQgbWVzc2FnZSBhcmUgcmVxdWlyZWQnIH0sXHJcbiAgICAgICAgeyBzdGF0dXM6IDQwMCB9XHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ3JlYXRlIEdtYWlsIHRyYW5zcG9ydGVyXHJcbiAgICBjb25zdCB0cmFuc3BvcnRlciA9IG5vZGVtYWlsZXIuY3JlYXRlVHJhbnNwb3J0KHtcclxuICAgICAgc2VydmljZTogJ2dtYWlsJyxcclxuICAgICAgYXV0aDoge1xyXG4gICAgICAgIHVzZXI6IHByb2Nlc3MuZW52LkVNQUlMX1VTRVIsXHJcbiAgICAgICAgcGFzczogcHJvY2Vzcy5lbnYuRU1BSUxfUEFTUywgLy8gVXNlIGFuIEFwcCBQYXNzd29yZCBpZiAyRkEgaXMgZW5hYmxlZFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gRW1haWwgY29udGVudFxyXG4gICAgY29uc3QgbWFpbE9wdGlvbnMgPSB7XHJcbiAgICAgIGZyb206IHByb2Nlc3MuZW52LkVNQUlMX1VTRVIsXHJcbiAgICAgIHRvOiBwcm9jZXNzLmVudi5FTUFJTF9VU0VSLFxyXG4gICAgICByZXBseVRvOiBlbWFpbCxcclxuICAgICAgc3ViamVjdDogYFBvcnRmb2xpbyBDb250YWN0OiAke25hbWV9YCxcclxuICAgICAgdGV4dDogYE5hbWU6ICR7bmFtZX1cXG5FbWFpbDogJHtlbWFpbH1cXG5NZXNzYWdlOiAke21lc3NhZ2V9YCxcclxuICAgICAgaHRtbDogYFxyXG4gICAgICAgIDxkaXYgc3R5bGU9XCJmb250LWZhbWlseTogQXJpYWwsIHNhbnMtc2VyaWY7IG1heC13aWR0aDogNjAwcHg7IG1hcmdpbjogMCBhdXRvO1wiPlxyXG4gICAgICAgICAgPGgyIHN0eWxlPVwiY29sb3I6ICMwZWE1ZTk7XCI+TmV3IENvbnRhY3QgRm9ybSBTdWJtaXNzaW9uPC9oMj5cclxuICAgICAgICAgIDxwPjxzdHJvbmc+TmFtZTo8L3N0cm9uZz4gJHtuYW1lfTwvcD5cclxuICAgICAgICAgIDxwPjxzdHJvbmc+RW1haWw6PC9zdHJvbmc+ICR7ZW1haWx9PC9wPlxyXG4gICAgICAgICAgPHA+PHN0cm9uZz5NZXNzYWdlOjwvc3Ryb25nPjwvcD5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5OyBwYWRkaW5nOiAxNXB4OyBib3JkZXItbGVmdDogNHB4IHNvbGlkICMwZWE1ZTk7IG1hcmdpbi10b3A6IDEwcHg7XCI+XHJcbiAgICAgICAgICAgICR7bWVzc2FnZS5yZXBsYWNlKC9cXG4vZywgJzxicj4nKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICBgLFxyXG4gICAgfTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBhd2FpdCB0cmFuc3BvcnRlci5zZW5kTWFpbChtYWlsT3B0aW9ucyk7XHJcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IG1lc3NhZ2U6ICdFbWFpbCBzZW50IHN1Y2Nlc3NmdWxseScgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBzZW5kaW5nIGVtYWlsOicsIGVycm9yKTtcclxuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxyXG4gICAgICAgIHsgZXJyb3I6ICdGYWlsZWQgdG8gc2VuZCBlbWFpbC4gUGxlYXNlIHRyeSBhZ2FpbiBsYXRlci4nIH0sXHJcbiAgICAgICAgeyBzdGF0dXM6IDUwMCB9XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yOicsIGVycm9yKTtcclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcclxuICAgICAgeyBlcnJvcjogJ0FuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWQnIH0sXHJcbiAgICAgIHsgc3RhdHVzOiA1MDAgfVxyXG4gICAgKTtcclxuICB9XHJcbn0gIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsIm5vZGVtYWlsZXIiLCJQT1NUIiwicmVxdWVzdCIsIm5hbWUiLCJlbWFpbCIsIm1lc3NhZ2UiLCJqc29uIiwiZXJyb3IiLCJzdGF0dXMiLCJ0cmFuc3BvcnRlciIsImNyZWF0ZVRyYW5zcG9ydCIsInNlcnZpY2UiLCJhdXRoIiwidXNlciIsInByb2Nlc3MiLCJlbnYiLCJFTUFJTF9VU0VSIiwicGFzcyIsIkVNQUlMX1BBU1MiLCJtYWlsT3B0aW9ucyIsImZyb20iLCJ0byIsInJlcGx5VG8iLCJzdWJqZWN0IiwidGV4dCIsImh0bWwiLCJyZXBsYWNlIiwic2VuZE1haWwiLCJjb25zb2xlIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/contact/route.ts\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fcontact%2Froute&page=%2Fapi%2Fcontact%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcontact%2Froute.ts&appDir=C%3A%5CUsers%5Ckhand%5COneDrive%5CDesktop%5CPortfolio%5CPortfolio%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Ckhand%5COneDrive%5CDesktop%5CPortfolio%5CPortfolio&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fcontact%2Froute&page=%2Fapi%2Fcontact%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcontact%2Froute.ts&appDir=C%3A%5CUsers%5Ckhand%5COneDrive%5CDesktop%5CPortfolio%5CPortfolio%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Ckhand%5COneDrive%5CDesktop%5CPortfolio%5CPortfolio&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_khand_OneDrive_Desktop_Portfolio_Portfolio_app_api_contact_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/contact/route.ts */ \"(rsc)/./app/api/contact/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/contact/route\",\n        pathname: \"/api/contact\",\n        filename: \"route\",\n        bundlePath: \"app/api/contact/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\khand\\\\OneDrive\\\\Desktop\\\\Portfolio\\\\Portfolio\\\\app\\\\api\\\\contact\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_khand_OneDrive_Desktop_Portfolio_Portfolio_app_api_contact_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZjb250YWN0JTJGcm91dGUmcGFnZT0lMkZhcGklMkZjb250YWN0JTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGY29udGFjdCUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNraGFuZCU1Q09uZURyaXZlJTVDRGVza3RvcCU1Q1BvcnRmb2xpbyU1Q1BvcnRmb2xpbyU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9QyUzQSU1Q1VzZXJzJTVDa2hhbmQlNUNPbmVEcml2ZSU1Q0Rlc2t0b3AlNUNQb3J0Zm9saW8lNUNQb3J0Zm9saW8maXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStGO0FBQ3ZDO0FBQ3FCO0FBQ3NDO0FBQ25IO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5R0FBbUI7QUFDM0M7QUFDQSxjQUFjLGtFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0RBQXNEO0FBQzlEO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzBGOztBQUUxRiIsInNvdXJjZXMiOlsiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxraGFuZFxcXFxPbmVEcml2ZVxcXFxEZXNrdG9wXFxcXFBvcnRmb2xpb1xcXFxQb3J0Zm9saW9cXFxcYXBwXFxcXGFwaVxcXFxjb250YWN0XFxcXHJvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9jb250YWN0L3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvY29udGFjdFwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvY29udGFjdC9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkM6XFxcXFVzZXJzXFxcXGtoYW5kXFxcXE9uZURyaXZlXFxcXERlc2t0b3BcXFxcUG9ydGZvbGlvXFxcXFBvcnRmb2xpb1xcXFxhcHBcXFxcYXBpXFxcXGNvbnRhY3RcXFxccm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICB3b3JrQXN5bmNTdG9yYWdlLFxuICAgICAgICB3b3JrVW5pdEFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fcontact%2Froute&page=%2Fapi%2Fcontact%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcontact%2Froute.ts&appDir=C%3A%5CUsers%5Ckhand%5COneDrive%5CDesktop%5CPortfolio%5CPortfolio%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Ckhand%5COneDrive%5CDesktop%5CPortfolio%5CPortfolio&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "child_process":
/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("child_process");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ "dns":
/*!**********************!*\
  !*** external "dns" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("dns");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("events");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("https");

/***/ }),

/***/ "net":
/*!**********************!*\
  !*** external "net" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("net");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("os");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "tls":
/*!**********************!*\
  !*** external "tls" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("tls");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/nodemailer"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fcontact%2Froute&page=%2Fapi%2Fcontact%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcontact%2Froute.ts&appDir=C%3A%5CUsers%5Ckhand%5COneDrive%5CDesktop%5CPortfolio%5CPortfolio%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Ckhand%5COneDrive%5CDesktop%5CPortfolio%5CPortfolio&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();