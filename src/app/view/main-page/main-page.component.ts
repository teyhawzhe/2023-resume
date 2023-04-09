import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatExpansionModule],
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent {
  titleStr: string[] = ['自我介紹'];

  engName: string = 'Lovius';

  name: string = '鄭希寓';

  zodiacSigns: string = '水瓶座';

  birth: string = '02/15';

  position: string = '軟體工程師 (2015/05 ~ NOW)';

  country: string = '馬來西亞 🇲🇾 ';

  graduateUniversity: string = '淡江大學資訊管理所';

  dutyIn: string = '中國信託商業銀行股份有限公司';

  mainSkill: string = 'JAVA , SPRINGBOOT Framework';

  hobby: string = '美食，攝影，羽球';

  tel: string = '0901-101-064';

  mail: string = 'loviusc@gmail.com';

  story: string =
    '來自馬來西亞，熱愛淡水。擁有超過7年網頁相關開發維護經驗，待過各種產業（SI，MIS，金融，產品）。保持著熱忱學習各種新事物。';

  experience: {since:string,company:string,duty:string,skill:string[]}[] =[
    {since:'2021年8月～NOW',company:'中國信託商業銀行股份有限公司',duty:'依據業務需求與USER討論並開發新功能與維護現有系統，處理行政事務。',skill:['struts1','spring framework','angular cli','gradle','git']},
    {since:'2020年8月～2021年6月',company:'日商NEC',duty:'重構勞保局對外系統，主要負責後端開發，帶人，與負責台灣銀行溝通維護其公保系統。',skill:['springboot','myBatis','spring aop','jwt token','struts1','spring','maven','git']},
    {since:'2019年4月～2020/7月',company:'凌網科技有限公司',duty:'開發CRM框架，維護紅利點數批次。',skill:['vue cli2','jwt token','springboot','spring data jpa','maven','ant','oracle DB','H2 DB']},
    {since:'2018年3月～2018/5月',company:'聯合報系子公司-聯經數位',duty:'重構聯合報系內部網站。',skill:['springboot','vue.js','spring data jpa','mySql','H2','git','maven']},
    {since:'2015年5月～2017年10月',company:'關貿網路股份有限公司',duty:'開發與維護關務署人事薪資差勤系統。',skill:['struts2','oracle db','maven','rtc']},
]

  skills:{cat:string,skill:string[]}[] = [
    {cat:'程式語言',skill:['java','js','typescript','sql']},
    {cat:'資料庫',skill:['oracle db','mariaDb','mysql','H2','ms-sql','sysbase']},
    {cat:'版本控制',skill:['git','svn','rtc']},
    {cat:'工具類',skill:['eclipse','vscode','sourcetree','dbeaver']},
    {cat:'框架',skill:['springboot framework','spring data jpa','shiro','spring security','myBatis','angular cli']}
  ]

}
