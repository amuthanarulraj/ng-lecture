import { TranslateService } from '@ngx-translate/core';

export function translationFactory(translate: TranslateService) {
  return () => new Promise<any>((resolve, reject) => {
    const lang = 'zh-cn';
    translate.setDefaultLang(lang);
    translate.use(lang).toPromise().then(() => {
      console.log(`Translation file for ${lang} language loaded successfully.`);
      resolve();
    }).catch((response: any) => {
      reject(`Translation file for ${lang} language failed to load.`);
    });
  });
}
