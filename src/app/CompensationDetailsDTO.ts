export class CompensationDetailsDTO {
    // private String ID;

	// private String oesPWWage;
	// private String oesURL;
	// private String oesSalRange;
	// private String count;
	obId: string;
	// private String empDocId;
	// private String delgDocId;
	compId: string;
	// private String isBandprog;
	// private String geoTier;
	// private String oldGeoTier;
	// private String mapCode;
	// private String oesMapCode;
	// private String socCode;
	// private Date dateInBand;
	// private String setAllowance;
	// private Date salEffDate;
	// private Date compEndDate;
	// private Date oldSalEffDate;
	// private Date futSalEffDate;
	// private Date oldCompEndDate;
	// private String currJobFamily;
	// private String currJobFamilyDesc;
	// private String highLow;
	// private String isCpp;
	// private String isLOAHire;
	// private String isHotSkill;
	// private String isItdOrIts;
	// private String isBonus;
	// private String isIpl;
	// private String lc50Miles;
	// private String offerName;
	empSerial: string;
	// empId6Digit: string;
	firstName: string;
	lastName: string;
	middleName: string;
	emailID: string;
	// pemSerail: string;
	// actualWorkLocationCity: string;
	// actualWorkCounty: string;
	// actualWorkState: string;
	currentWorkLocation: string;
	// currentClient: string;
	// oldClient: string;
	compStatus: string;
	// compStatusName: string;
	// obStatus: string;
	// obStatusName: string;
	compSt: string;
	// city: string;
	// county: string;
	// visaType: string;
	// pmpSeatId: string;
	// private String emplt89;
	// private String curreEmployer;
	// private String reqCreatedEmail;
	// private String reqCreatedName;
	// private String reqCreatedSerial;
	// private String reqCreatedNotesID;
	// private String jobTitle;
	// private String eduTraining;
	// private String itExeperience;
	// private String year;
	// private String month;
	// private String itprojSkill1;
	// private String itprojSkill2;
	// private String itprojSkill3;
	// private String itprojSkill4;
	// private String itprojSkill5;
	// private String comment;
	// private String bussinessUnit;
	// private String bussinessUnitName;
	// private String pemName;
	// private String pemEmail;
	// private String hrAdvisor;
	// private String hrAdvisorEmail;
	// private String reqPemName;
	// private String reqPemEmail;
	// private String reqPemSerial;
	// private String reqPemNotes;
	// private String usAccntMgr;
	// private String usAccntprpdProjEmail;
	// private Date prosdStartDate;
	// private String prpdStartDate;
	// private String prpdEndDate;
	// private String ancptDuration;
	// private String prpdRole;
	// private String prpdJobTitle;
	// private String endClientName;
	// private String add1;
	// private String add2;
	// private String state;
	zip: string;
	// private String phone;
	// private String dtCompensationCalculated;
	// private String annlBasePay;
	// private String monthlyBasePay;
	// private String basSalEnc;
	// private String bandLevel;
	// private String bandName;
	compType: string;
	// compTypeName: string;
	// recSt: string;
	// private String compRep;
	// private String compRepId;
	// private Date compCalDate;
	// private String insContr;
	// createdBy: string;
	// updatedBy: string;
	// ctdTmsp: string;
	// updateddt: string;
	createdDt: string;
	// verifiedby: string;
	// verifiedStatus: string;
	// private Onboard saveObrecord;
	// private Location saveUSTLocrecord;
	// private Location saveUSWLocrecord;
	// private Location saveCWLocrecord;
	// private Employee saveEmprecord;
	// private JobSkill saveJobskill;
	// private CompensationCommentDTO comments;
	// private CompensationCommentDTO revCmnts;
	// private List<CompensationCommentDTO> compComments;
	// private List<CompensationCommentDTO> revComments;
	// private PMPDataDTO pmpDetails;
	// private Onboard empVisa;
	// private ProjectAssignDetailsDTO projAssn;
	// private HCAMDBUser user1;
	// private Date dateTopayroll;
	// private Timestamp verifiedDt;
	// private String actionBy;
	// private String actionDesc;
	// private Timestamp actionDt;
	// private IBMAssociate ibmAssoc;

	// private String newCity;
	// private String newCounty;
	// private String newState;
	// private String newBasSalEnc;
	// private String newGeoName;
	// private String geoName;
	// private String ctdUpdDt;
	// private String visaStatus;

	// private Date calLCADate;
	// private String areaTitle;
	// private String oesOccupation;
	// private String oesPWLevel;
	// private String oesPWWageLevel;
	// private String oesPAFURL;
	// private String salRange;
	// private Integer totalCount;
	// private String actLCASal;
	// private String lcaTo;
	// private String lcaCc;
	// private String lcaUser;

	// private Date oesDate;
	// private Date classiDate;
	// private Date minDate;
	// private Date formulaDate;
	// private String abnormalCal;
	// private String dataSheetId;
	// private Date reqCtdDate;
	// private String currentCity;
	// private String currentCounty;
	// private String currentState;
	// private String homeCity;
	// private String homeCounty;
	// private String homeState;
	// private String pemStatus;
	// private String mailSentDt;
	// private String mgrEmailId;
	// private String archReason;
	// private String deptCode;
	// private String bonusExists;
	// private BonusAndIncentiveDTO bonusIncentDTO;
	// private String salEffChange;
	// private String changeComment;
	// private String seleJobFamily;
	// private String futCompChgFlag;
	// private ESignatureDTO electronicSignatureDTO;
	// private String elecSignatureDate;
    // private String actionName;
    // private String sendReqTo;
	// private String oldObId;
	// private String oldCompId;

// 	private Date actStartDate;
// 	private String lcaId;
// 	private String isException;
// 	private String exceptionComments;
// 	private String excepAppBy;
// 	private Timestamp excepAppDt;
// 	private double bonusAmt;
// 	private String compClientName;

// 	private String compTeamMetricsStartDate;
// 	private String compTeamMetricsEndDate;
// 	private Integer totalCompRejected;
// 	private Integer totalCompApproved;
// 	private Integer totalCompSubmitted;
// 	private Integer totalCompReturnstoMgr;
// 	private double overallTurnAroundTime;
// 	private String compSpecialistorApprover;
// 	private List<CompensationDetailsDTO> compMetricsBySpecialist;
// 	private List<CompensationDetailsDTO> compMetricsByApprover;
// 	private CompensationDetailsDTO allCompSpecialist;
// 	private CompensationDetailsDTO allCompApprover;
// 	private String approvedDt;
// 	private String offerApprovedDt;

// 	private String	workLocation;
// 	private String jobFamily;
// 	private Date payRollDt;

// 	private String employer;
// 	private Date offerSentDt;
// 	private String projMgrEmail;
// 	private String oldWorkCity;
// 	private String oldWorkState;
// 	private String oldWorkCountry;
// 	private String oldWorkStreetAdd;
// 	private String oldWorkAdd;
// 	private Date oldWorkstateCityEndDt;
// 	private String oldWorkstateCityEndLoc;
// 	private String currWorkStreetAdd;
// 	private String currWorkAdd;
// 	private String currEndClientName;
// 	private String newClient;
// 	private String currBillClassification;
// 	private String compClassification;
// 	private Date bandProgressionDt;
// 	private String primarySkill;
// 	private String isHigh;
// 	private String currAssignStay;
// 	private String overAllAssignStay;
// 	private String usHomeAdd;
// 	private String homePhoneNo;
// 	private String workPhoneNo;
// 	private String maritalStatus;
// 	private String gender;
// 	private String SSN;
// 	private Date dob;
// 	private Date obProcessCompletedDt;
// 	private String alternateEmailId;
// 	private Date petitionStartDt;
// 	private Date petitionEndDt;
// 	private Date visaStartDt;
// 	private Date workAuthoDt;
// 	private Date i9ReceivedDt;
// 	private Date i9OriginalRecDt;
// 	private Date i9VerifiedDt;
// 	private Date i9EcpDt;
// 	private String obRep;
// 	private Date mlStartDt;
// 	private Date mlEndDt;
// 	private Date terminationDt;
// 	private Date ibmResignDt;
// 	private Date returntoWorkDt;
// 	private String rePaymentAmount;
// 	private String rePaymentRec;
// 	private Date ctdUpdDate;

// 	private Date propEndDate;
// 	private Date eSignDate;

// 	private String isReqCtdByCompTeam;
// 	private String stateName;
// 	private String stateCode;

// 	private String newWorkLocation;
// 	private String newCompensation;
// 	private Date relocDate;
// 	private String currentCompensatipn;
// 	private String currentAdd;
// 	private String immigrationApproval;
// 	private String band;
// 	private String newCompensationAmt;
// 	private String currentCompensatiamt;
// 	private String isRemoteApprovalue;

// 	private Date assignStartDat;
// 	private Date ctdUpdDat;
// 	private Date prosdStartDat;
// 	private Date salEffDat;
// 	private Date datTopayroll;
// 	private Date eSignDat;
// 	private Date relocDat;
// 	private Date assignStartDt;
// 	private Date finalAutho;
// 	private String compRepNotesId;
// 	private String esign_st;
// 	private String esign_statusname;
// 	private String currentHomeJRSS;
// 	private String currentUSJRSS;
// 	private String propUSJRSS;
// 	private String currentJRCode;
// 	private String propJRCode;
// 	private String usBandLevel;
// 	private String usBandName;
// 	private String usJobFamilyCode;
// 	private String pmrSalaryEnc;
// 	private Integer similarWorkEmpCount;
// 	private String similarWorkMinWage;
// 	private String similarWorkMaxWage;
// 	private String similarWorkSalRange;
// 	private String ibmGlobalPmrEnc;
// 	private String usPmrEnc;
// 	private String currentUSPmrEnc;
// //	private double globalPmr;
// 	private double usPmr;
// 	private double currentUSPmr;
// 	private Double ibmGlobalPmr;
// 	private Double ibmGlobalPmrOld;
// 	private Integer msaAreaCode;
// 	private String countryCode;
// 	private String isEspInc;
// 	private CompHcamDTO compHcamDto;
// 	private SalaryRangesDTO salRangeDto;
// 	private Date espCtdDate;
// 	private String ibmWLCloseToClientLoc;

// 	private String broadBandPositionIDSubBand;
// 	private String broadBandSubBand;
// 	private String jobFamilyCode;
// 	private String empNumber;
//     private String jobProfile;

// 	private String countryIsoCode;
//     private String busJustReloc;
// 	private Date geoValueDate;
// 	private Date i94expDt;
// 	private Date seperationDt;
// 	private Date termDt;
// 	private Date loaStartDt;
// 	private Date loaEndDt;
// 	private Date petEndDt;
// 	private Date returnIndiaDt;
// 	private Date repaymentDate;
// 	private Date visaExpDt;
// 	private Double bonus;
// 	private String reqPmEmail;
// 	private String empNotesID;
// 	private String sepReason;
// 	private String lca;
// 	private String lt89ind;
// 	private String familyStatus;
// 	private String addnlCompType;
// 	private String addnlCompAmount;
// 	private String salConcern;
// 	private String usAmEmail;
// 	private String usActLoc;
// 	private String clientLoc;
// 	private String sector;
// 	private String industry;
// 	private String compCt;
// 	private String compVisaType;
// 	private String newOrSameClient;
// 	private String eligibleForRedep;
// 	private String isremoteApproval;
// 	private String streetAdd;

	hostCountrySerial: string;
	// hostEmpEmail: string;

}
