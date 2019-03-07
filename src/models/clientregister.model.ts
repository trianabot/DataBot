export interface ClientRegister {
  adminId: String;
	organizationName: String;
	industries: Array<string>;
	industriesUsecase:Array<{industryName: String, industriesUsecase: Array<String>}>;
	adminName: String;
	role: String;
	adminRole: String;
	emailId: String;
	contactNumber: String;
	alternativeEmailId: String;
  password: String;
	userName: String;
  securityQuestions: Array<{question: String, answer: String}>;
};

export interface UserRegister {
  clientId: String;
	userName: String;
	role: String;
	industries: Array<string>;
	industriesUsecase:Array<{industryName: String, industriesUsecase: Array<String>}>;
	firstName: String;
	lastName: String;
	emailId: String;
	phone: String;
	alternateEmail: String;
	password: String;
	designation: String;
	location: String;
};
