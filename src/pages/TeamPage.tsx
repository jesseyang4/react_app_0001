import React from "react";
import nzlvgaBanner from "../assets/images/nzlvga_banner3.jpeg";
import logoNzwsa from "../assets/images/sponsor_logo/s5_6.jpeg";
import "./VideoPage.css";
import "./TeamPage.css";

function IndexVideoBPage() {
  return (
    <div className="container_12">
      <div className="grid_12">
        <div className="grid_12 alpha">
          <div className="box-3">
            <div className="gradient_1">
              <h2>团队伙伴</h2>
            </div>
            <div
              className="box-3_pad_3 p_text_lineheight"
              style={{
                fontSize: "18px",
                textIndent: "Video0px",
              }}
            >
              <p className="p_text_header">(一)隶属协会的团队:</p>
              <p className="p_text_subheader p_text_header_white">
                Botany协会气排球队:
              </p>
              <p className="p_text_body" style={{ marginTop: "20px" }}>
                <ul style={{ listStyle: "disc" }}>
                  <li>
                    全称：Botany华人协会老年气排球队（球队简称：青松岭气排球队）
                  </li>
                  <li>球队人员：30余名，其中：男队员15名，女队员16名。</li>
                  <li>年龄结构：平均68.9岁</li>
                  <li>训练信息</li>
                  <ul style={{ listStyle: "circle" }}>
                    <li>地点：2 Fremantle Place. Pakuranga.</li>
                    <li>
                      时间： 每周一上午10点—12点; 每周五下午1点—3点;
                      每周六晚上6:30—8:30.
                      (注：由于Botany协会资金有限，周五、周六两天球训由队员自费为参赛前增加的球训时间）
                    </li>
                  </ul>
                  <li>球队组织背景：</li>
                  <ul style={{ listStyle: "circle" }}>
                    <li>球队于2023年7月15日正式成立，至今一年零一个月。</li>
                    <li>
                      在这一年的时间里，球队得到了新西兰气排球协会总会在人力、物力上的大力扶持、帮助，指派专业教练、裁判长来组织训练，同时David
                      Xu会长亲力亲为，亲临球训现场执教带队训练。我们球队遵循总会
                      “快乐、健康、团结、进步”协会的气排精神，更有每位球员的努力拼搏、刻苦训练、相互配合，才能打造一支合作共赢的优秀团队。
                    </li>
                    <li>
                      球队在今年3月25日，在新西兰气排球协会总会的支持下，成功举办了第一次“康斯坦”杯Botany华人协会气排球积分赛。为打造一支华人老年气排球团队的生力军开创了新的局面
                      ，未来可期。在运动中享受快乐，增进友谊，赛出水平，争取荣誉，收获健康！
                    </li>
                    <li>夕阳无限好 ，何必惆怅近黄昏！最美不过夕阳红！</li>
                  </ul>
                </ul>
              </p>
              <p className="p_text_subheader p_text_header_white">
                Tegel Nuggets 队（简称 TN 队）:
              </p>
              <p className="p_text_body" style={{ marginTop: "20px" }}>
                是由 Tegel
                公司员工及其家属于今年2月组建的气排球队。成立之初，队伍只有10名成员;
                如今已发展到33人。尽管 TN
                队成立时间不长，但他们已经在今年五月代表新西兰参加了中国长泰气排球公开赛，不仅做为有史以来第一支全部是纯外籍人士的队伍到中国访问比赛,
                更为促进新中文化交流发挥了积极作用。
                <br />
                <br />
                <ul style={{ listStyle: "disc" }}>
                  <li>队伍构成: 人数33人, 其中包括男队员19人和14名女队员。</li>
                  <li>
                    年龄分布: 13岁1人、 00后14人、
                    90后13人、80后2人、70后1人、60后2人。
                  </li>
                  <li>文化背景: 毛利人1人、华人2人、岛人30人。</li>
                  <li>
                    训练信息: 地点: YMCA Massey; 时间: 每周六下午2:00 - 4:00
                  </li>
                </ul>
              </p>
              <p className="p_text_header">(二)合作单位: </p>
              <p  id="vray" className="p_text_subheader p_text_header_white">
                同和排球俱乐部(VRay Volleyball Club) :
              </p>
              <p className="p_text_body" style={{ marginTop: "20px" }}>
                成立于2020年，由一群热爱排球、气排球运动，遍布奥克兰的中青年球员组成，是新西兰排协VNZ-WECA注册排球俱乐部，多年来一直致力于为广大华裔排球爱好者提供训练交流切磋的平台，提升华裔运动员在本地排球运动中的表现。
              </p>
              <div className="team-page-display-flex">
                <span><p id="nzwfsa" className="p_text_subheader p_text_header_white">
                  新西兰万方排球俱乐部 :
                </p></span>
                <span><img src={logoNzwsa} alt="" style={{ height: "45px" }} /></span>
              </div>
              <p className="p_text_body" style={{ marginTop: "20px" }}>
新西兰万方排球俱乐部自2006年成立以来，已经走过了18年的辉煌历程。俱乐部的成立得益于一群热爱排球的人士的共同倡议和努力，其中包括创始人万方集团总经理郭宏先生，他的领导和远见为俱乐部奠定了坚实的基础。前国家男排队员蒋杰先生的专业指导，以及在中国、澳大利亚和新西兰三地执教的资深排球教练姜虹先生的经验，都对俱乐部的发展起到了关键作用。现任队长李始明先生，作为球队的领导者，不仅在场上展现出卓越的领导力，带领球队在各项赛事中取得优异成绩，同时在场下积极推动团队的团结和进步，为俱乐部的发展做出了巨大贡献。<br /><br />
他们对排球的热爱和对运动精神的追求，得到了当地社区的广泛支持和响应。在这样一个充满活力的背景下，俱乐部迅速成长，从最初的十几名成员发展到今天拥有男女队员近百人的规模。<br /><br />
万方排球俱乐部不仅在成员数量上实现了飞跃，更在竞技水平上取得了显著成就。俱乐部积极参与各类排球赛事，通过不懈努力，成功推动了排球运动在奥克兰华人社区的普及和发展。多年来，俱乐部在全新西兰华人排球联赛和奥克兰华人排球联赛中屡获佳绩，连续夺冠，展现了俱乐部的竞技实力和团队精神。同时也反映了其对排球运动推广和普及的积极贡献。<br /><br />
近年来，随着气排球在中国的流行，这种新兴的排球形式也渐渐在新西兰传播开来。万方排球俱乐部敏锐地捕捉到了这一趋势，并迅速响应，组织了气排球的比赛和训练。<br /><br />

气排球比赛的成功举办，不仅展示了俱乐部在传统排球项目上的实力，也体现了其在推广新运动形式上的创新精神和包容性。<br /><br />
万方排球俱乐部还开展了一系列的青少年排球培训项目，由姜虹先生执教，旨在培养年轻一代对排球运动的兴趣和热情。通过专业的教练团队和系统的训练计划，俱乐部为青少年提供了一个学习和提高排球技能的平台，同时也注重培养他们的团队合作精神和竞技态度。这些培训项目不仅为俱乐部输送了新鲜血液，也为青少年的全面发展提供了支持。<br /><br />
展望未来，万方排球俱乐部将继续致力于排球运动的推广和普及，同时不断探索和引入新的运动形式，如气排球，以满足不同年龄和技能水平的会员需求。俱乐部希望通过这些活动，激发更多人对排球运动的兴趣，促进社区内的体育文化交流，增强社区凝聚力。<br /><br />
万方排球俱乐部的故事，是一段关于热爱、坚持和成就的旅程。它激励着更多的排球爱好者加入到这项运动中来，共同享受排球带来的快乐和挑战。无论是在传统的排球赛事中，还是在新兴的气排球活动中，万方排球俱乐部都将继续以其卓越的表现和积极的社区贡献，书写着属于自己的传奇。<br /><br />

              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndexVideoBPage;

