Instructions <br>
1. npm install ng2loggerbasic <br>
2. Modify your system-config.ts to include ng2loggerbasic <br>
        const barrels: string[] = [

          // Angular specific barrels.

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
<br>
3. Modify your angular-cli-build.js<br>

   module.exports = function(defaults) {

   return new Angular2App(defaults, {

    vendorNpmFiles: [

      //other relevant file paths,

      'ng2loggerbasic/**/*.js'

    ]

   });

   };
<br>
4. In your app component<br>

   import {LoggerService} from 'ng2loggerbasic/ng2-logger-basic';

   @Component({

   ...

      providers:[provide(LoggerService, {

                          useFactory: () =&gt; {

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
<br>
Note: These instruction are specifically for an angular2/ng2 2.0.0-rc.1 & angular-cli 0.0.39 based project. <br>
<br>
It hasn't been tested on other versions (given the fact angular rc3 /cli is still a bit flaky as of this writing)<br>
