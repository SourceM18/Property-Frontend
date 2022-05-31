
# Documenation

### DESCRIPTION

1. [Installation](#installation)
2. [Usage](#usage)
3. [Development](#development)
4. [Build](#build)
5. [Deployment](#deployment)
6. [Project structure](#project-structure)
7. [Testing](#testing)
8. [Support](#support)
9 [License](#license)
***

### INSTALLATION

To get the project up and running, and view components in the browser, complete the following steps:
1. Download and install Node: `https://nodejs.org/`
2. Install Yarn: `npm i yarn -g`
2. Clone this repo: `git clone ssh://git@git.jetbrains.space/sourcemates/landlord/landlord-frontend.git` (SSH) or `https://git.jetbrains.space/sourcemates/landlord/landlord-frontend.git` (HTTPS)
3. Install project dependencies: `yarn install`
4. Start the development environment: `yarn start`
5. Open your browser and visit `http://localhost:8080`

***
### USAGE
For starting the development use:
* `yarn start`

***
### DEVELOPMENT
When developing components, you may want assets automatically compiled, and the browser to refresh automatically. To do this, run the following task:

* `yarn run dev`

***
### BUILD
To create instance of this project, run the following task:
* `yarn run build`
***

### DEPLOYMENT
In this project, we used configured autodeploy, which is used after pushing changes to the `master` branch.
If you want to deploy manually, use the following commands:

* `yarn build`

* `firebase init`

* `firebase deploy`

***

### PROJECT STRUCTURE
***
Sometimes it’s helpful to know what all these different files are for…
```
/
├─ public                   # Public files
│  ├─ favicon/              # Favicons
│  ├─ .htaccess             # Configuration apache file
│  ├─ manifest.json         # Manifest file
│  ├─ pusher-sw.js          # JS-pusher script file
│  ├─ pwa-sw.js             # PWA settings file
│  ├─ sw.js                 # Service worker file
│  ├─ template.html         # Base html-template file
├─ src/                     # Structure
│  ├─ assets/               # Assets
│  │  ├─ icons/             # SVG images, icons and logos
│  │  ├─ images/            # Raster images (used in component examples)
│  │  ├─ fonts/             # Fonts used in this project
│  │
│  ├─ components/           # Components
│  │  ├─ Account/           # …that render component account
│  │  ├─ AddressInput/      # …that render component addressInput
│  │  ├─ AdminNavbar/       # …that render component AdminNavbar
│  │  ├─ AuthWith/          # …that render component AuthWith
│  │  ├─ Dashboard/         # …that render component Dashboard
│  │  ├─ DatePicker/        # …that render component DatePicker
│  │  └─ Decimal/           # …that render component Decimal
│  │  └─ Discounts/         # …that render component Discounts
│  │  └─ Header/            # …that render component Header
│  │  └─ Invoices/          # …that render component Invoices
│  │  └─ Modals/            # …that render Modals components
│  │  └─ Navbar/            # …that render component Navbar
│  │  └─ Payments/          # …that render component Payments
│  │  └─ PhotoInstance/     # …that render component PhotoInstance
│  │  └─ Property/          # …that render component Property
│  │  └─ RentalTime/        # …that render component RentalTime
│  │  └─ RentalTimeView/    # …that render component RentalTimeView
│  │  └─ SingleTotal/       # …that render component SingleTotal
│  │  └─ Tenancy/           # …that render component Tenancy
│  │  └─ Tenant/            # …that render component Tenant
│  │  └─ TotalProperties/   # …that render component TotalProperties
│  │  └─ Transactions/      # …that render component Transactions
│  │  └─ App.tsx            # Project main file
│  │  └─ Index.ts           # File for exporting components
│  ├─ containers/           # Containers
│  │  ├─ Founder/           # Founder container files
│  │  └─ NewItem/           # New item files
│  │  └─ Index.ts           # File for exporting components
│  └─ context/              # Context files
│  └─ helpers/              # Some helpers files
│  └─ hooks/                # Custom hooks
│  └─ pages/                # Project pages
│  │  ├─ AdminPages/        # Admin pages
│  │  │  └─ AdminAccount/   # Admin account files
│  │  │  └─ Discounts/      # Discount page files
│  │  └─ AuthPages/         # Authorized pages
│  │  │  └─ Account/        # Account files
│  │  │  └─ BanksApi/       # Banks api files
│  │  │  └─ Dashboard/      # Dashboard files
│  │  │  └─ Properties/     # Properties files
│  │  │  └─ Tenants/        # Tenants files
│  │  └─ UnAuthPages/       # Unauthorized pages
│  │  │  └─ Activate/       # Activate components
│  │  │  └─ LandingPage/    # Landing page components
│  │  │  └─ ResetPasswords/ # Reset passwords components files
│  │  └─ Index.ts           # File for exporting components
│  └─ routes/               # Navigational routes files
│  └─ store/                # Store
│  │  │  └─ auth/               # Auth actions and reducer
│  │  │  └─ banks/              # Banks actions and reducer
│  │  │  └─ common/             # Common actions and reducer
│  │  │  └─ dashboard/          # Dashboard actions and reducer
│  │  │  └─ discounts/          # Discounts actions and reducer
│  │  │  └─ payments/           # Payments actions and reducer
│  │  │  └─ properties/         # Properties actions and reducer
│  │  │  └─ tenancy/            # Tenancy actions and reducer
│  │  │  └─ tenants/            # Tenants actions and reducer
│  │  │  └─ transactions/       # Transactions actions and reducer
│  │  │  └─ user/               # User actions and reducer
│  │  │  └─ index.tsx            # Store file
│  │  │  └─ rootAction.ts       # Root action file
│  │  │  └─ rootActionTypes.ts  # Root action types file
│  │  │  └─ rootReducer.ts      # Root reducer file
│  └─ Styles/               # Styles of this app
│  └─ UI/                   # UI
│  │  └─ AppLink/           # AppLink component
│  │  └─ Dropdown/          # Dropdown
│  │  └─ GoBackButton/      # Go back button
│  │  └─ KeyLoader/         # KeyLoader
│  │  └─ Layouts/           # Layouts
│  │  └─ Modal/             # Modal basic component
│  │  └─ index.tsx           # File for exporting components
│  └─ Utils/                # Supporting utiles
│  │  └─ API/               # Api files
│  │  └─ Logger/            # Logger
│  │  └─ requests/          # Requests files
│  │  └─ Types/             # Types
│  │  │  └─ HTTPRequestsData/   # Requests type files
│  │  │  └─ HTTPResponsesData/  # Responses type files
│  │  │  └─ Instances/          # Instances type files
│  │  │  └─ LocalTypes/         # Local types files
│  │  │  └─ index.tsx            # File for importing components
│  │  │  └─ service.ts          # Service file
│  │  └─ history.ts             # History file
│  │  └─ index.tsx               # File for exporting components
│  │  └─ LocalStorage.ts        # local storage file
│  └─ index.tsx             # Root entry points file for components
├─ webpack/                 # Module bundler
├─ .babelrc                 # Babel config file
├─ .env                     # Env file
├─ .env.example             # Example env file
├─ .firebaserc              # File that stores your project aliases
├─ .gitignore               # List of files and folders not tracked by Git
├─ .prettierrc              # Code formatter
├─ .space.kts               # JetBrains Space Automation scripts
├─ declarations.d.ts        # Declaration file
├─ firebase.json            # Configuration for Firebase
├─ package.json             # Project manifest
└─ README.md                # This file
└─ tsconfig.json            # TypeScript config file
└─ tslint.json              # TypeScript linter file

```
***
# Testing

For start testing, installed dependencies:
```
yarn add --dev jest babel-jest @babel/preset-env @babel/preset-react react-test-renderer
```
Your `package.json` should look something like this (where `<current-version>` is the actual latest version of the dependency). Please add scripts and configuration entries for `Jest`:
```
"dependencies": {
"react": "<current-version>",
"react-dom": "<current-version>"
},
"devDependencies": {
"@babel/preset-env": "<current-version>",
"@babel/preset-react": "<current-version>",
"babel-jest": "<current-version>",
"jest": "<current-version>",
"react-test-renderer": "<current-version>"
},
"scripts": {
"test": "jest"
}
```
***
#Support



***
#License
[ISC](https://www.isc.org/licenses/)

***
