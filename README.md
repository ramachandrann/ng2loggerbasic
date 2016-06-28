Instructions
1. npm install ng2loggerbasic

2. Modify your system-config.ts to include ng2loggerbasic
        const barrels: string[] = [
          // Angular specific barrels.
          '@angular/core',
          '@angular/common',
          '@angular/compiler',
          '@angular/http',
          '@angular/router',
          '@angular/platform-browser',
          '@angular/platform-browser-dynamic',

          // Thirdparty barrels.
          'ng2loggerbasic',

          // App specific barrels.
          'app',
          /** @cli-barrel */
        ];
        ...
        ...
        // Apply the CLI SystemJS configuration.
        System.config({
          map: {
            '@angular': 'vendor/@angular',
            'ng2loggerbasic': 'vendor/ng2loggerbasic',
            //other inclusions...
          },
          packages: cliSystemConfigPackages
        });

3. Modify your angular-cli-build.js
   module.exports = function(defaults) {
   return new Angular2App(defaults, {
    vendorNpmFiles: [
      //other relevant file paths,
      'ng2loggerbasic/**/*.js'
    ]
   });
   };

4. In your app component
   import {LoggerService} from 'ng2loggerbasic/ng2-logger-basic';

   @Component({
   ...
      providers:[provide(LoggerService, {
                          useFactory: () => {
                            return new LoggerService(LOG_LEVEL);
                          }
              })]
   })              
   ...
   export class Application {
     constructor(private _logger: LoggerService) {
        this._logger.debug('#Application constructor#');
     }
   }

Note: These instruction are specifically for an angular2/ng2 2.0.0-rc.1 & angular-cli 0.0.39 based project. 
It hasn't been tested on other versions (given the fact angular rc3 /cli is still a bit flaky as of this writing)
