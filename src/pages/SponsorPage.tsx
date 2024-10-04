import "../assets/css/style.css";
import "./SponsorPage.css";
import scoreImg1 from '../assets/images/score_img1.png';
import SponsorLogoEntry from '../component/SponsorLogoEntry';
import s1_1 from '../assets/images/sponsor_logo/s1_1.png';
import s1_2 from '../assets/images/sponsor_logo/s1_2.jpg';
import s1_3 from '../assets/images/sponsor_logo/s1_3_a_2_1.jpg';
import s2_1 from '../assets/images/sponsor_logo/s1_3_a_2_1.jpg';
import s2_2 from '../assets/images/sponsor_logo/s2_2.jpeg';
import s3_1 from '../assets/images/sponsor_logo/s3_1.jpeg';
import s3_2 from '../assets/images/sponsor_logo/s3_2.png';
import s3_3 from '../assets/images/sponsor_logo/s3_3.jpg';
import s3_4 from '../assets/images/sponsor_logo/s3_4.png';
import s4_1 from '../assets/images/sponsor_logo/s4_1.png';
import s4_2 from '../assets/images/sponsor_logo/s4_2.png';
import s4b_1 from '../assets/images/sponsor_logo/s4b_1.png';
import s5_1a from '../assets/images/sponsor_logo/s5_1a.jpg';
import s5_1 from '../assets/images/sponsor_logo/s5_1.jpg';
import s5_2 from '../assets/images/sponsor_logo/s5_2.jpg';
import s5_3 from '../assets/images/sponsor_logo/s5_3.jpeg';
import s5_4 from '../assets/images/sponsor_logo/s5_4.jpg';
import s5_5 from '../assets/images/sponsor_logo/s5_5.jpg';
import s5_6 from '../assets/images/sponsor_logo/s5_6.jpeg';
import s5_7 from '../assets/images/sponsor_logo/s5_7.jpg';
import s6_1 from '../assets/images/sponsor_logo/s6_1.jpg';
import s7_1 from '../assets/images/sponsor_logo/s7_1.jpg';
import s7_2 from '../assets/images/sponsor_logo/s7_2.png';
import s7_3 from '../assets/images/sponsor_logo/s7_3.jpg';
import s7_4 from '../assets/images/sponsor_logo/s7_4.jpeg';
import s7_5 from '../assets/images/sponsor_logo/s7_5.jpeg';
import s7_6 from '../assets/images/sponsor_logo/s7_6.jpg';
import s7_7 from '../assets/images/sponsor_logo/s7_7.png';
import s7_8 from '../assets/images/sponsor_logo/s7_8.jpg';
import s7_9 from '../assets/images/sponsor_logo/s7_9.png';
import s7_10 from '../assets/images/sponsor_logo/s7_10.png';
import s8_1 from '../assets/images/sponsor_logo/s8_1.jpg';
import s8_2 from '../assets/images/sponsor_logo/s8_2_a_8_3.jpg';
import s8_3 from '../assets/images/sponsor_logo/s8_2_a_8_3.jpg';
import s8_4 from '../assets/images/sponsor_logo/s8_4.jpg';
import s8_5 from '../assets/images/sponsor_logo/s8_5.jpg';
import s8_6 from '../assets/images/sponsor_logo/s8_6.jpeg';
import s8_7 from '../assets/images/sponsor_logo/s8_7.jpg';
import s8_7b from '../assets/images/sponsor_logo/s8_7b.png';
import s8_8 from '../assets/images/sponsor_logo/s8_8.jpeg';
import s8_9 from '../assets/images/sponsor_logo/s8_9.jpeg';
import s8_10 from '../assets/images/sponsor_logo/s8_10.jpg';
import s8_11 from '../assets/images/sponsor_logo/s8_11.png';
import s8_12 from '../assets/images/sponsor_logo/s8_12.jpeg';
import s8_13 from '../assets/images/sponsor_logo/s8_13.jpg';
import s8_14 from '../assets/images/sponsor_logo/s8_14.jpg';
import s8_15 from '../assets/images/sponsor_logo/s8_15.jpg';
import s8_16 from '../assets/images/sponsor_logo/s8_16.jpg';
import s8_17 from '../assets/images/sponsor_logo/s8_17.jpg';
import s8_18 from '../assets/images/sponsor_logo/s8_18.jpg';
import s8_19 from '../assets/images/sponsor_logo/s8_19.jpeg';
import s8_20 from '../assets/images/sponsor_logo/s8_20.jpeg';
import s8_21 from '../assets/images/sponsor_logo/s8_21.jpg';
import s8_22 from '../assets/images/sponsor_logo/s8_22.png';
import s8_23 from '../assets/images/sponsor_logo/s8_23.png';
import s8_24 from '../assets/images/sponsor_logo/s8_24.jpg';
import s8_25 from '../assets/images/sponsor_logo/s8_25.jpg';
import s8_26 from '../assets/images/sponsor_logo/s8_26.jpg';
import s8_27 from '../assets/images/sponsor_logo/s8_27.jpg';
import s9_1 from '../assets/images/sponsor_logo/s9_1.jpg';
import s9_2 from '../assets/images/sponsor_logo/s9_2.jpg';
import s9_3 from '../assets/images/sponsor_logo/s9_3.jpeg';
import s9_4 from '../assets/images/sponsor_logo/s9_4.png';
import s9_4b from '../assets/images/sponsor_logo/s9_4b.png';
import s9_5 from '../assets/images/sponsor_logo/s9_5.png';
import s9_6 from '../assets/images/sponsor_logo/s9_6.jpg';
import s9_7 from '../assets/images/sponsor_logo/s9_7.jpg';
import s9_8 from '../assets/images/sponsor_logo/s9_8.png';
import s9_9 from '../assets/images/sponsor_logo/s9_9.jpg';
import s9_10 from '../assets/images/sponsor_logo/s9_10.jpg';
import s9_11 from '../assets/images/sponsor_logo/s9_11.jpg';
import s9_13 from '../assets/images/sponsor_logo/s9_13.jpg';

function Index2Page() {
  return (
    <div className="container_12">
      <div className="grid_12">
        <div className="grid_12 alpha">
          <div className="box-3">
            <div className="gradient_1">
              <h2>支持单位</h2>
            </div>
            <div
              className="box-3_pad_3  p_text_lineheight ml_lg ml_xl"
              style={{
                fontSize: "18px",
                // textIndent: "50px",
              }}
            >
              <p className="p_text_header sponsor_fs_lg sponsor_fs_xl">
                主办 | Host
              </p>
              <SponsorLogoEntry sponsorNameCn="新西兰气排球协会总会" sponsorNameEn="New Zealand Light Volleyball General Association" imageSrc={s1_3}  linkPath="/about" />
              <SponsorLogoEntry sponsorNameCn="新西兰华人妇女联合基金会" sponsorNameEn="Chinese Women Association of New Zealand" imageSrc={s1_1} />
              <SponsorLogoEntry sponsorNameCn="新西兰文化艺术基金会" sponsorNameEn="New Zealand Culture And Arts Foundation" imageSrc={s1_2} />

              <p className="p_text_header sponsor_fs_lg sponsor_fs_xl">
                承办 | Organizer
              </p>
              <SponsorLogoEntry sponsorNameCn="奥克兰- 新西兰气排球协会总会New Zealand Light Volleyball General Association" imageSrc={s2_1} linkPath="/about" />
              <SponsorLogoEntry sponsorNameCn="悉   尼 -  澳大利亚群英气排球俱乐部 Australia Heroes Light Volleyball Club" imageSrc={s2_2} linkPath="/aboutHeroes" />
              
              <p className="p_text_header sponsor_fs_lg sponsor_fs_xl">
                特别支持 | Special Support
              </p>
              <SponsorLogoEntry sponsorNameCn="中国文化中心-奥克兰 China Cultural Centre" imageSrc={s4b_1} />

              <p className="p_text_header sponsor_fs_lg sponsor_fs_xl">
                特别协办 | Special Co-Organizer
              </p>
              <SponsorLogoEntry sponsorNameCn="中山大学澳洲校友会 Sun Yat-Sen University Australia Alumni Association Incorporated" imageSrc={s3_1} />
              <SponsorLogoEntry sponsorNameCn="中山大学新西兰校友会 Sun Yat-Sen University Alumni Association Of New Zealand" imageSrc={s3_2} />
              <SponsorLogoEntry sponsorNameCn="新西兰国会议员橄榄球队NZ Parliamentary Rugby Team" imageSrc={s3_3} />
              <SponsorLogoEntry sponsorNameCn="Volleyball New Zealand" imageSrc={s3_4} />

              <p className="p_text_header sponsor_fs_lg sponsor_fs_xl">
                特别捐助 | Special Sponsor
              </p>
              <SponsorLogoEntry sponsorNameCn="PlaceMakers" imageSrc={s4_1} />
              {/* TODO: make the small height of above img 76% */}
              <SponsorLogoEntry sponsorNameCn="新西兰华人建筑业协会 New Zealand Chinese Building Industry Association(NZCBIA)" imageSrc={s4_2} />

              <p className="p_text_header sponsor_fs_lg sponsor_fs_xl">
                协办 | Co-Organizer
              </p>
              <SponsorLogoEntry sponsorNameCn="新西兰华商俱乐部 		New Zealand Chinese Business Club" imageSrc={s5_1a} />
              <SponsorLogoEntry sponsorNameCn="新西兰山东同乡会  Shandong Fellow Association of New Zealand" imageSrc={s5_1} />
              <SponsorLogoEntry sponsorNameCn="新西兰广西同乡会 New Zealand Guangxi Association INC" imageSrc={s5_2} />
              <SponsorLogoEntry sponsorNameCn="新西兰华夏文化艺术交流中心 New Zealand Chinese Culture and Arts Exchange Centre" imageSrc={s5_3} />
              {/* TODO: make the small height of above img 27% */}
              <SponsorLogoEntry sponsorNameCn="新西兰和平之友联谊会 New Zealand Friendship for Peace Association" imageSrc={s5_4} />
              <SponsorLogoEntry sponsorNameCn="太平洋文化艺术发展协会Pacific Culture and Arts Development Association Inc" imageSrc={s5_5} />
              <SponsorLogoEntry sponsorNameCn="万方排球体育总会   NZWFSA" imageSrc={s5_6} linkPath="/team#nzwfsa" />
              <SponsorLogoEntry sponsorNameCn="同和排球俱乐部     VRay Volleyball Club" imageSrc={s5_7}  linkPath="/team#vray" />

              <p className="p_text_header sponsor_fs_lg sponsor_fs_xl">
                媒体主办 | Major Media
              </p>
              <SponsorLogoEntry sponsorNameCn="Channel 33" imageSrc={s6_1} />
              <p className="p_text_header sponsor_fs_lg sponsor_fs_xl">
                捐助 | Donation
              </p>
              <SponsorLogoEntry sponsorNameCn="日新有限公司 Nishin" imageSrc={s7_1} />
              <SponsorLogoEntry sponsorNameCn="联合信贷 Mortgage Allied Associates" imageSrc={s7_2} />
              <SponsorLogoEntry sponsorNameCn="爱高尔夫俱乐部 NZ Ai Golf Club" imageSrc={s7_3} />
              <SponsorLogoEntry sponsorNameCn="新西兰 New Eats NZ New Eats" imageSrc={s7_4} />
              <SponsorLogoEntry sponsorNameCn="新西兰融霞鲜肉  NZ Rong Xia Wholesale Meat" imageSrc={s7_5} />
              <SponsorLogoEntry sponsorNameCn="新西兰康斯坦阳光房 NZ Constant Sunroom" imageSrc={s7_6} />
              <SponsorLogoEntry sponsorNameCn="新西兰新中集运 NZ N&C Logistics Limited" imageSrc={s7_7} />
              <SponsorLogoEntry sponsorNameCn="NZ  Upperhouzz Design Ltd" imageSrc={s7_8} />
              <SponsorLogoEntry sponsorNameCn="中国北京海百利 China Bei Jing Hai Bai Li" imageSrc={s7_9} />
              <SponsorLogoEntry sponsorNameCn="中国厦门麒麟号 China Xia Men QiLin Hao" imageSrc={s7_10} />
              <SponsorLogoEntry sponsorNameCn="浩博进出口（新西兰）有限公司" />
              <SponsorLogoEntry sponsorNameCn="​​青岛同乡会" />

              <p className="p_text_header sponsor_fs_lg sponsor_fs_xl">
                支持单位 | Supporters
              </p>
              <SponsorLogoEntry sponsorNameCn="世界轻排联盟 Australian WLVL.ORG" imageSrc={s8_1} />
              <SponsorLogoEntry sponsorNameCn="澳大利亚女子气排球俱乐部 Australian Light Volleyball Women‘s Club" imageSrc={s8_2} />
              <SponsorLogoEntry sponsorNameCn="澳大利亚沙拉铿锵玫瑰队Australian SHALA Light Volleyball Women’s Team" imageSrc={s8_3} />
              <SponsorLogoEntry sponsorNameCn="澳大利亚悉尼火星队Australian Sydney Mars Team" imageSrc={s8_4} />
              <SponsorLogoEntry sponsorNameCn="中国大连风筝冲浪俱乐部China DaLian Kite Surfing Club" imageSrc={s8_5} />
              <SponsorLogoEntry sponsorNameCn="新西兰广东高校联盟羽毛球俱乐部GDUAANZ" imageSrc={s8_6} />
              <SponsorLogoEntry sponsorNameCn="新西兰洪瑜珈 Hong Yoga" imageSrc={s8_7} />
              <SponsorLogoEntry sponsorNameCn="逆龄天团 TEAM EMMA" imageSrc={s8_7b} />
              <SponsorLogoEntry sponsorNameCn="新西兰王船长游艇俱乐部 NZ Legend Boating Club" imageSrc={s8_8} />
              <SponsorLogoEntry sponsorNameCn="新西兰体育运动协会New Zealand Fitness Association" imageSrc={s8_9} />
              <SponsorLogoEntry sponsorNameCn="Tudor Court Motor Lodge" imageSrc={s8_10} />
              <SponsorLogoEntry sponsorNameCn="新西兰罗托鲁瓦剑新大酒店 Newina Rotorua" imageSrc={s8_11} />
              <SponsorLogoEntry sponsorNameCn="老板电器	Robam Appliances" imageSrc={s8_12} />
              <SponsorLogoEntry sponsorNameCn="The Devereux Remuera" imageSrc={s8_13} />
              <SponsorLogoEntry sponsorNameCn="蒙娜丽莎瓷砖B & L Home Improvement Ltd" imageSrc={s8_14} />
              <SponsorLogoEntry sponsorNameCn="信诚国际Xin Cheng International" imageSrc={s8_15} />
              <SponsorLogoEntry sponsorNameCn="Sarsfield Brooke Ltd" imageSrc={s8_16} />
              <SponsorLogoEntry sponsorNameCn="新西兰华人企业家协会New Zealand Chinese Entrepreneurs Association" imageSrc={s8_17} />
              <SponsorLogoEntry sponsorNameCn="新西兰天津总商会New Zealand TianJin General Chamber of Commerce INC." imageSrc={s8_18} />
              <SponsorLogoEntry sponsorNameCn="Pakuranga华人协会Pakuranga Chinese Association" imageSrc={s8_19} />
              <SponsorLogoEntry sponsorNameCn="新西兰汉娜文体中心 HANNA Sport & Culture Association Incorporated" imageSrc={s8_20} />
              <SponsorLogoEntry sponsorNameCn="Onehunga社区华人协会 Onehunga Chinese Association INC." imageSrc={s8_21} />
              <SponsorLogoEntry sponsorNameCn="SportHub 社区运动中心 SportHub Community Trust" imageSrc={s8_22} />
              <SponsorLogoEntry sponsorNameCn="新西兰河南同乡联谊会Henanese Association (NZ) Incorporated" imageSrc={s8_23} />
              <SponsorLogoEntry sponsorNameCn="Botany华人协会 Botany Chinese Association Inc" imageSrc={s8_24} />
              <SponsorLogoEntry sponsorNameCn="Epsom 华人协会Epsom Chinese Association" imageSrc={s8_25} />
              <SponsorLogoEntry sponsorNameCn="新西兰湖南青年会NZ HuNan Youth Federation Incorporated" imageSrc={s8_26} />
              <SponsorLogoEntry sponsorNameCn="Sustainable Learning Limited" imageSrc={s8_27} />
              <p className="p_text_header sponsor_fs_lg sponsor_fs_xl">
                媒体支持 | Media Support
              </p>
              <SponsorLogoEntry sponsorNameCn="新西兰报 New Zealand Newspaper" imageSrc={s9_1} />
              <SponsorLogoEntry sponsorNameCn="逸居新西兰 YIJU NZ" imageSrc={s9_2} />
              <SponsorLogoEntry sponsorNameCn="新西兰播报New Zealand News" imageSrc={s9_3} />
              <SponsorLogoEntry sponsorNameCn="敬华传媒Jinghua Media" imageSrc={s9_4} />
              <SponsorLogoEntry sponsorNameCn="澳洲印象 Australia Impressions" imageSrc={s9_4b} />
              <SponsorLogoEntry sponsorNameCn="华人头条 Chinese Headline Media" imageSrc={s9_5} />
              <SponsorLogoEntry sponsorNameCn="海外华人网 CHINESENET" imageSrc={s9_6} />
              <SponsorLogoEntry sponsorNameCn="澳纽网" sponsorNameEn="ausnz.net" imageSrc={s9_7} externalLinkPath="https://ausnznet.com/new/" />
              <SponsorLogoEntry sponsorNameCn="东南网" sponsorNameEn="FJSEN.COM" imageSrc={s9_8} externalLinkPath="https://www.fjsen.com/" />
              <SponsorLogoEntry sponsorNameCn="牧归人工作室 MUGUIREN" imageSrc={s9_9} />
              <SponsorLogoEntry sponsorNameCn="中国城网站" sponsorNameEn="chinesetown.co.nz" imageSrc={s9_10} externalLinkPath="http://www.chinesetown.co.nz/" />
              <SponsorLogoEntry sponsorNameCn="和平友爱 LOVE.PEACE" imageSrc={s9_11} />
              <SponsorLogoEntry sponsorNameCn="苏翔工作室 NZ SuXiang Studio" imageSrc={s9_13} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index2Page;

