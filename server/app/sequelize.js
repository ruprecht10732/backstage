const sequelize = require("sequelize");
const UserModel = require("./models/user.model.js");
const RoleModel = require("./models/role.model.js");
const PermissionModel = require("./models/permission.model");
const RoleToPermissionModel = require("./models/RoleToPermission.model.js");
const UserAddressModel = require("./models/UserAddress.model.js");
const UserDetailsModel = require("./models/UserDetails.model.js");
const UserEmergencyContactModel = require("./models/UserEmergencyContact.model.js");
const UserIdentityModel = require("./models/UserIdentity.model.js");
const UserToRoleModel = require("./models/UserToRole.model.js");
const LoginModel = require("./models/Login.model.js");
const LocationsModel = require("./models/location.model.js");
const VestigingenModel = require("./models/vestigingen.model.js");
const ManagerModel = require("./models/manager.model.js");
const DepartmentEmployeesModel = require("./models/DepartmentEmployees.model.js");
const SalaryModel = require("./models/Salary.model.js");
const TimeSheetModel = require("./models/TimeSheet.model.js");
const CostCenterModel = require("./models/CostCenter.model.js");
const ProjectModel = require("./models/Projects.model.js");
const ActivitiesModel = require("./models/Activities.model.js");
const ActivityCodesModel = require("./models/ActivityCodes.model.js");
const AvailabilityDaysModel = require("./models/AvailabilityDays.model.js");
const AvailabilityHoursModel = require("./models/AvailabilityHours.model.js");
//Database
const db = require("../app/config/database.js");
const Login = require("./models/login.model.js");

// Test DB

db.authenticate()
  .then(() => console.log("Database is working...."))
  .catch((err) => console.log(err));

Login.belongsTo(UserModel, {
  foreignKey: "email",
  targetKey: "email",
});
Login.belongsTo(UserModel);
UserAddressModel.belongsTo(UserModel);
UserDetailsModel.belongsTo(UserModel);
UserIdentityModel.belongsTo(UserModel);
UserEmergencyContactModel.belongsTo(UserModel);
UserModel.hasOne(UserAddressModel);
UserModel.hasOne(UserDetailsModel);
UserModel.hasOne(UserIdentityModel);
UserModel.hasOne(UserEmergencyContactModel);
UserModel.hasOne(ManagerModel);
LocationsModel.belongsTo(VestigingenModel);
ProjectModel.belongsTo(LocationsModel);
ProjectModel.belongsTo(UserModel);
VestigingenModel.hasOne(LocationsModel);
VestigingenModel.hasOne(ManagerModel);
DepartmentEmployeesModel.belongsTo(UserModel);
DepartmentEmployeesModel.belongsTo(VestigingenModel);
SalaryModel.belongsTo(UserModel);
UserToRoleModel.belongsTo(UserModel);
UserToRoleModel.belongsTo(RoleModel);
RoleToPermissionModel.belongsTo(PermissionModel);
RoleToPermissionModel.belongsTo(RoleModel);
TimeSheetModel.belongsTo(UserModel);
TimeSheetModel.belongsTo(CostCenterModel);
ActivitiesModel.belongsTo(ProjectModel);
ActivitiesModel.belongsTo(ActivityCodesModel);
AvailabilityHoursModel.belongsTo(UserModel);
AvailabilityDaysModel.belongsTo(UserModel);

db.sync({ force: true })
  .then(() => {
    console.log(`Database & tables created!`);
  })
  .catch((err) => console.log(err));
