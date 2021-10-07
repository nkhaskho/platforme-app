// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  API_URL: "http://127.0.0.1:8000/api",
  ROLES: [
    {
      name: "TEAM_MEMBER",
      label: "Team member"
    },
    {
      name: "TEAM_LEADER",
      label: "Team leader"
    },
    {
      name: "PROJECT_MANAGER",
      label: "Project manager"
    },
  ],
  RESERVATIONS_STATUS: [
    "IN_PROGRESS",
    "VALIDATED", 
    "POSTPONED", 
    "REJECTED"
  ],
  EQUIPMENTS_TYPES: [
    {
      abbreviation: "HW",
      designation: "Hardware"
    },
    {
      abbreviation: "SW",
      designation: "Software"
    }
  ],
  EQUIPMENT_STATUS: [
    "OBSOLETE",
    "AVAILABLE",
    "UNDER_REPAIR",
    "SAMPLING",
    "UNRELIABLE"
  ],
  DOCUMENT_TYPES: [
    'GUIDE',
    'MEMO'
  ],
  DOCUMENT_STATES: [
      'DRAFT',
      'IN_PROOFREADING',
      'IN_CORRECTION',
      'PUBLISHED'
  ]
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
