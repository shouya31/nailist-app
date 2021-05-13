
import './reset.css';
import './App.css';

function App() {
  return (
    <>
    <header>
        <h1>
            <img src="/header-logo.png" alt="ネイルケアリスト協会ロゴ" />
            <div className="program-title">
                <p className="main-title">ネイルケアリスト養成プログラム</p>
                <p className="sub-title">あなたの目的に合わせた教育コース</p>
            </div>
        </h1>
        <div className="header_wrapper">
            <nav className="is-flex">
                <ul className="is-flex header_nav">
                    <li><a href="#features">特徴</a></li>
                    <li><a href="#instructor">講師</a></li>
                    <li><a href="#course">コース</a></li>
                    <li><a href="#fee">ご料金</a></li>
                    <li><a href="#career">卒業後のキャリア</a></li>
                    <li><a href="#schedule">スケジュール</a></li>
                    <li><a href="#faq">FAQ</a></li>
                </ul>
                <ul className="is-flex header_cta-btn">
                    <li className="btn_info-session">
                        <div id="information_session">無料説明会</div>
                    </li>
                    <li className="btn_entry">
                        <div className="application_form">お申し込み</div>
                    </li>
                </ul>
                <ul className="is-flex header_sns">
                    <li>
                        <a href="https://page.line.me/?accountId=100udhtx" target="_blank" rel="noopener noreferrer">
                            <img src="/sns_line.png" alt="ネイルケアリスト協会のLINEアカウント" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/nailcarelist_ltd/" target="_blank" rel="noopener noreferrer">
                            <img src="/sns_instagram.png" alt="ネイルケアリスト協会のInstagram" />
                        </a>
                    </li>
                </ul>

            </nav>
        </div>
        <button type="button" className="zdo_drawer_button">
            <span className="zdo_drawer_bar zdo_drawer_bar1"></span>
            <span className="zdo_drawer_bar zdo_drawer_bar2"></span>
            <span className="zdo_drawer_bar zdo_drawer_bar3"></span>
            <span className="zdo_drawer_menu_text zdo_drawer_text">MENU</span>
            <span className="zdo_drawer_close zdo_drawer_text">CLOSE</span>
        </button>
    </header>

    <div className="kv_pc" style={{background: "url(./kv_pc.jpg) center/cover"}}>
        <div className="kv-text">
            <p>新しいネイリストの姿、<br />
                <span>ネイルケアリスト</span>にあなたもなりませんか？
            </p>
            <p className="kv-nailcarelist">Nail Carelist</p>
        </div>
        <div className="kv_cta-btn">
            <div className="btn_info-session">
                <div id="information_session">無料説明会はこちら</div>
            </div>
            <div className="btn_entry">
                <div className="application_form">お申し込みはこちら</div>
            </div>
        </div>
    </div>
    <div className="kv_tb">
        <div className="kv-text">
            <p>新しいネイリストの姿、<br />
                <span>ネイルケアリスト</span>にあなたもなりませんか？
            </p>
            <p className="kv-nailcarelist">Nail Carelist</p>
        </div>
        <div className="kv_cta-btn">
            <div className="btn_info-session">
                <div id="information_session">無料説明会はこちら</div>
            </div>
            <div className="btn_entry">
                <div className="application_form">お申し込みはこちら</div>
            </div>
        </div>
    </div>
    <div className="kv_sp">
        <div className="kv-text">
            <p>新しいネイリストの姿、<br />
                <span>ネイルケアリスト</span>にあなたもなりませんか？
            </p>
            <p className="kv-nailcarelist">Nail Carelist</p>
        </div>
        <div className="kv_cta-btn">
            <div className="btn_info-session">
                <div id="information_session">無料説明会はこちら</div>
            </div>
            <div className="btn_entry">
                <div className="application_form">お申し込みはこちら</div>
            </div>
        </div>
    </div>
    <main>
        <section className="intro">
            <div className="intro_about is-flex flex-column">
                <div className="intro_about_inner">
                    <h2 id="features">ネイルケアリストとは？</h2>
                    <p className="serif">
                        お客様の指先の美しさはもちろん、健康的で清潔感のある⼿元をつくるネイルの技術に加えて、お客様に素敵な毎日を送っていただくことを考えてカウンセリング出来る施術者のことです。</p>
                    <div className="skill-feature">
                        <ul className="is-flex">
                            <li>
                                <p>技術力</p>
                            </li>
                            <li>
                                <p>接客力</p>
                            </li>
                            <li>
                                <p>人間力</p>
                            </li>
                        </ul>
                    </div>
                    <div className="skill-detail">
                        <ul>
                            <li>
                                <p>お客様の限られた持ち時間の中で美しく仕上げる技術力</p>
                            </li>
                            <li>
                                <p>要望や状況に対応し快適な空間を作りリピーターを増やし続けられる接客力</p>
                            </li>
                            <li>
                                <p>お客様の⼼からの笑顔と信頼を得る事ができる⼈間⼒</p>
                            </li>
                        </ul>
                    </div>
                    <p className="skill-explain">この3つの「⼒」を兼ね備えたネイリストを、ネイルケアリストと呼びます。</p>
                </div>
                <div className="img-wrapper">
                    <img src="/intro_about.jpg" alt="ネイルケアリストの手元の写真" />
                </div>
            </div>
            <div className="intro_problem serif" style={{background: "url(/intro-problem_bg.png) center/cover"}}>
                <p className="mb40">ネイリストとしての毎日、想像と違う...<br />
                    今のままじゃダメだけど、<br className="spbr" />何をしたらいいのか分からない。</p>
                <ul>
                    <li>
                        <p className="fs14">頑張って資格をとったのに、活躍できていない</p>
                    </li>
                    <li>
                        <p className="fs14">資格のために勉強して覚えたことが、<br className="spbr" />現場では全然使えない</p>
                    </li>
                    <li>
                        <p className="fs14">どんなスキルを向上させればよいかわからない</p>
                    </li>
                </ul>
            </div>
            <div className="intro_solution" style={{background: 'url(/bg-pattern.svg)'}}>
                <div className="img-wrapper mb20">
                    <img src="/intro_solution_catch.png" alt="新しいネイリストの姿、ネイルケアリストにあなたもなりませんか？" className="img-pc" />
                    <img src="/intro_solution_catch_tb.png" alt="新しいネイリストの姿、ネイルケアリストにあなたもなりませんか？" className="img-tb" />
                    <img src="/intro_solution_catch_tb.png" alt="新しいネイリストの姿、ネイルケアリストにあなたもなりませんか？" className="img-sp" />
                </div>
                <div className="intro_solution_inner" style={{background: "url(/intro-solution_bg.png) center/contain no-repeat"}}>
                    <div className="solution_cta-btn is-flex">
                        <div className="btn_info-session">
                            <div id="information_session">無料説明会はこちら</div>
                        </div>
                        <div className="btn_entry">
                            <div className="application_form">お申し込みはこちら</div>
                        </div>
                    </div>
                </div>
              </div>
        </section>
        <section className="story">
            <div className="section-inner">
                <img src="/story_heading.png" alt="" className="story_section-title-img" />
                <h2 className="story_section-title">これまでのネイリスト教育は、<br />現場で通用しないことが多かった</h2>
                <p>これまでネイリストの教育は「好きなことを仕事にできる」「⾃由な時間で働ける」「⾃宅で仕事ができる」と謳われることが多くありました。</p>
                <p>しかし、いざネイリストとして働いてみると、理想と現実のギャップに頭を抱える方も少なくありません。なぜならば、ネイルのやり方を学んだだけでは現場で通用せず、「お客様とのコミュニケーションの仕方」「サロン運営に必要な知識」「実践で必要な応用技術」など、他に身につける必要のあるスキルがたくさんあるからです。
                </p>
                <p>必要なスキルがたくさんあるにも関わらず、今までの検定や資格では、いざネイリストが現場に出てから必要な内容が含まれたものではありませんでした。</p>
                <p>現在の検定に合格しただけでは実践的なレベルまでは到達していないため、サロンに入ってからの研修が長引いているのが現状です。</p>
                <p className="mb20">研修において教える側も教わる側も何を行なって良いのか分からない状況です。</p>
                <div className="img-wrapper">
                    <img src="/story_01.jpg" alt="" />
                </div>
            </div>
        </section>
        <section className="story">
            <div className="section-inner">
                <img src="/story_heading.png" alt="" className="story_section-title-img" />
                <h2 className="story_section-title">早く活躍できる<br className="spbr" />実用的な新しいネイル教育が必要</h2>
                <p>大切なことは、現場で即活躍するための技術力、接客力、人間力をどれだけ早く身につけることができるかです。</p>
                <p>それらのスキルを手にしたネイリストは、限られた時間の中でお客様への施術を完了し、お客様の期待を上回るサービスが提供でき現場で活躍することができるでしょう。お客様に喜ばれて、⾃分自身もイキイキと働くことができます。
                </p>
                <p className="mb20">わたしたちは、そんな活躍できる一流のネイルケアリストを育成する新しい教育プログラム、ネイルケアリスト養成プログラムを作りました。</p>
                <div className="story_skill">
                    <ul>
                        <li>
                            <p className="skill-feature">技術力</p>
                            <p className="skill-detail">お客様の限られた持ち時間の中で美しく仕上げる技術力</p>
                        </li>
                        <li>
                            <p className="skill-feature">接客力</p>
                            <p className="skill-detail">要望や状況に対応した快適な空間を作り<br />
                                リピーターを増やし続けられる接客力</p>
                        </li>
                        <li>
                            <p className="skill-feature">人間力</p>
                            <p className="skill-detail mb0">お客様の⼼からの笑顔と信頼を得る事ができる⼈間⼒</p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
        <section className="story">
            <div className="section-inner">
                <img src="/story_heading.png" alt="" className="story_section-title-img" />
                <h2 className="story_section-title">8年間のノウハウを凝縮した<br className="spbr" />教育プログラムを開発</h2>
                <p className="mb20">ネイルケアリスト協会のプログラムは、メンズネイルケア市場のパイオニアであるオトコネイルが培ってきた8年間のノウハウを、誰でも身につけることができるように作り上げたものです。
                </p>
                <div className="is-flex story03_img  mb20">
                    <div className="img-wrapper">
                        <img src="/story_02.jpg" alt="" />
                    </div>
                    <div className="img-wrapper">
                        <img src="/story_03.jpg" alt="" />
                    </div>
                </div>
                <p>オトコネイルでは、指先の美しさにもこだわりたいという、富裕層の男性から特にご好評いただいています。お客様層は40代以上の方々が8割以上なので、お手元が荒れている方が多く、一般的なネイルケアのお手入れでは対応できないケースも多くあります。
                </p>
                <p>また、そういった爪先まで気配りをされる方々は接客にも非常に厳しい目をお持ちです。オトコネイルは東京に5店舗、大阪に1店舗を構え、創業以来総勢10万人以上のお客様にサービス提供をしてきました。</p>
                <p>
                    お客様のリピーター率は88%※と高水準であり、多くのお客様に支持されています。2020年、コロナ禍の中でも昨対比103%の成長率を達成しました。この結果はこれまでの技術力・接客力・人間力の賜物です。
                </p>
                <p className="fs10 mb20">※当社調べ 2020年1月~12月</p>
                <p className="mb20">
                    業界からも高い評価をされ、何よりもお客様の高い期待に応え続けてきたオトコネイルだからこそ、一流のネイルケアリストを育成する新しい教育プログラム、ネイルケアリスト育成プログラムを開発することができました。
                </p>
                <div className="is-flex story03_img mb20">
                    <div className="img-wrapper">
                        <img src="/story_04.jpg" alt="" />
                    </div>
                    <div className="img-wrapper">
                        <img src="/story_05.jpg" alt="" />
                    </div>
                </div>
            </div>
        </section>
        <section className="instructor">
            <div className="section-title_wrapper">
                <img src="/section-title.png" className='section-title_wrapper-img'/>
                <h2 id="instructor">講師は最先端の現場で活躍する<br />現役ネイルケアリスト</h2>
                <span>Nail Carelist Instructor</span>
            </div>
            <div className="section-inner">
                <div className="is-flex flex-column mb20">
                    <div className="instructor_intro">
                        <div className="img-wrapper mb20">
                            <img src="/instructor_kimura.jpg" alt="" />
                        </div>
                        <p>木村 和代</p>
                        <p className="fs14">ネイルケアリスト歴12年</p>
                    </div>
                    <div className="instructor_comment">
                        <p>来店するたびにトップは剥がれ爪がボロボロになってしまうお客様がいらっしゃいました。爪を綺麗に直してお返しするのは技術力があればできます。<br />
                            根本的な爪の悩みを改善するには生活習慣や趣味嗜好を知ること、より良い仕上げ方や改善点を提案する接客力が必要です。<br />
                            ネイリストは一対一の究極の接客業だと思います。お客様を知ることにより自分の持っている技術を最大限に引き出せる様にする接客力が大切です。
                        </p>
                    </div>
                </div>
                <div className="is-flex flex-column mb20">
                    <div className="instructor_intro">
                        <div className="img-wrapper mb20">
                            <img src="/instructor_awano.jpg" alt="" />
                        </div>
                        <p>淡野 美恵</p>
                        <p className="fs14">ネイルケアリスト歴11年</p>
                    </div>
                    <div className="instructor_comment">
                        <p>面接にいらっしゃる方の多くはネイリストは接客業だと知っているのに、何故か技術の質問ばかりです。
                            技術ももちろん大切ですが、お客様の事を知らないとその方が何を求めているのか分からないままになってしまいます。相手を知ると施術がもっと楽しくなり、お客様から信頼されます。
                            先日は失恋から交際、そしてご結婚された方のお話を聞いて、私まで感動してしまいました。
                            相手を知り、相手の人生を共有することは自分自身の気持ちも豊かになり、大切な時間を体感する事ができます。
                        </p>
                    </div>
                </div>
                <div className="is-flex flex-column mb20">
                    <div className="instructor_intro">
                        <div className="img-wrapper mb20">
                            <img src="/instructor_chikatsu.jpg" alt="" />
                        </div>
                        <p>千勝 早希子</p>
                        <p className="fs14">ネイルケアリスト歴8年</p>
                    </div>
                    <div className="instructor_comment">
                        <p>型にはまらない柔軟な接客が必要となります。<br />
                            お客様は「なぜその日のその時間に来店されたのか」というご来店になられた背景をいかに把握し、理解することで、お客様がより良い気持ちでお帰りなれるようなサポート力、提案力を身につけることが大切です。
                        </p>
                    </div>
                </div>
            </div>
        </section>











        <section className="course">
            <div className="course_bg">
                <div className="section-title_wrapper">
                    <img src="/section-title.png" className='section-title_wrapper-img'/>
                    <h2 id="course">目的に合わせて選べるコース</h2>
                    <span>Course</span>
                </div>
                <div className="section-inner">

                    <div className="course_care-technique course_wrapper">
                        <div className="course-title_wrapper">
                            <h3>ケア技術コース</h3>
                            <p>約6ヶ月のオンライン対応コース</p>
                        </div>
                        <div className="course_inner">
                            <h4>オンライン講座</h4>
                            <dl className="course_dl">
                                <dt>
                                    <div>
                                        <p>技術</p>
                                        <p>全5回</p>
                                    </div>
                                </dt>
                                <dd>
                                    <p>ハンドケア</p>
                                    <p>第1回：爪切り、ファイル（爪の適切な長さ）<br />
                                        第2回：甘皮ケア（ニッパー・プッシャーの使い方）<br />
                                        第3回：表面仕上げ（シャイナー・トップコート）</p>
                                    <p>フットケア</p>
                                    <p>第4回：爪切り、ファイル（爪の長さ・形）<br />
                                        第5回：甘皮ケア、角質ケア</p>
                                </dd>
                                <dt>
                                    <div>
                                        <p>知識</p>
                                        <p>全5回</p>
                                    </div>
                                </dt>
                                <dd>
                                    <p>実際のサロンで質問される内容を学びます。<br />
                                        基礎知識を実践で使用出来るように、施術内容の理解を深めることが目的です。</p>
                                </dd>
                                <dt>
                                    <div>
                                        <p>オンライン<br />
                                            テスト</p>
                                        <p>全1回</p>
                                    </div>
                                </dt>
                                <dd>
                                    <p>個別採点制。<br />
                                        定められた時間内で、実際の施術をモデルに行います。</p>
                                </dd>
                            </dl>
                            <p className="fs14 mb40">オンライン講座終了後、合格者にオンライン講座合格証発行</p>
                            <h4>オフライン実践講座</h4>
                            <p>都内にて6日間のオフライン実践講習・テストを行います。</p>
                            <p className="text-red fs14">※注意点 オフラインの講座は東京都内で実施いたします。</p>
                            <dl className="course_dl">
                                <dt>
                                    <div>
                                        <p>1日目</p>
                                        <p>サロンワーク講習</p>
                                    </div>
                                </dt>
                                <dd>
                                    <p>卒業後の即戦力として実際のサロンで全てのサロン業務を実際に体験します。</p>
                                    <p>サロン業務は施術以外にも沢山あるので、1日の流れを身体で覚えていきます。</p>
                                </dd>
                                <dt>
                                    <div>
                                        <p>2日目 / 3日目 / 4日目</p>
                                        <p>手足ともにモデル講習</p>
                                    </div>
                                </dt>
                                <dd>
                                    <p>手足共に全3回。個別での技術確認で生徒様の苦手ポイントを個別に克服します。</p>
                                    <p>モデルの手・足を使う講習で、人それぞれの特徴にどのように対応していくのかを学びます。</p>
                                </dd>
                                <dt>
                                    <div>
                                        <p>5日目</p>
                                        <p>模擬テスト</p>
                                    </div>
                                </dt>
                                <dd>
                                    <p>定められた時間内で、実際の施術をモデルに行います。</p>
                                </dd>
                                <dt>
                                    <div>
                                        <p>6日目</p>
                                        <p>テスト</p>
                                    </div>
                                </dt>
                                <dd>
                                    <p>定められた時間内でテストを行います。</p>
                                </dd>
                            </dl>
                            <p className="fs14">合格者にネイルケアリスト技術修了証発行</p>
                        </div>
                    </div>
                    <div className="course_service-technique course_wrapper">
                        <div className="course-title_wrapper">
                            <h3>接客コース</h3>
                            <p>接客力・人間力を作るために必須のコース</p>
                            <p className="text-red">※オンライン講座、オフライン実践講座合格者のみ受講可能</p>
                        </div>
                        <div className="course_inner">
                            <h4>接客講座</h4>
                            <dl className="course_dl">
                                <dt>
                                    <div>
                                        <p>全2回</p>
                                        <p>オフライン受講</p>
                                    </div>
                                    <div>
                                        <p>全4回</p>
                                        <p>オンライン受講</p>
                                    </div>
                                </dt>
                                <dd>
                                    <p>計16時間</p>
                                    <p>社会人のコミュニケーション/人の個性を知る/商売とは/売上とは/費用と利益/KGIᆞKPI設定/基本接客/商品説明/
                                        5段階の接客/提案の接客/信頼の接客/クレーム対応/
                                        リーダーとしてのコミュニケーション/部下との信頼関係/
                                        部下への教え方/部下へのメンタリング/
                                        スタッフ同士のコミュニケーション/
                                        経営者とのコミュニケーション/お客様とのコミュニケーション</p>
                                </dd>
                            </dl>
                            <h4>マナー講座</h4>
                            <p>講義と実践が組み込まれているので、すぐにサロンで活かせます。</p>
                            <dl className="course_dl">
                                <dt>
                                    <div>
                                        <p>全2回</p>
                                        <p>オンライン受講</p>
                                    </div>
                                </dt>
                                <dd>
                                    <p>計6時間<br />
                                        <span className="fs10">（テスト含む）</span>
                                    </p>
                                    <p>言葉づかい/所作/身だしなみ/社会人としてのマナー</p>
                                </dd>
                            </dl>
                            <p className="fs14">合格者に各講座合格証発行</p>
                        </div>
                    </div>
                    <div className="course_professional course_wrapper">
                        <div className="course-title_wrapper">
                            <h3>プロコース</h3>
                        </div>
                        <div className="course_inner">
                            <h4>衛生講座</h4>
                            <p>サロンで必要な衛生管理として、施術者を守るための病気への対応を学びます</p>
                            <dl className="course_dl">
                                <dt>
                                    <p>全2回</p>
                                    <p>オンライン受講</p>
                                </dt>
                                <dd>
                                    <p>計4時間<br />
                                        <span className="fs10">（テスト含む）</span>
                                    </p>
                                </dd>
                            </dl>
                            <h4>トラブルケア講座</h4>
                            <p>特殊な爪への対応方法、施術方法を学びます</p>
                            <dl className="course_dl">
                                <dt>
                                    <div>
                                        <p>全2回</p>
                                        <p>オンライン受講</p>
                                    </div>
                                </dt>
                                <dd>
                                    <p>計4時間<br />
                                        <span className="fs10">（テスト含む）</span>
                                    </p>
                                </dd>
                            </dl>
                            <h4>美容皮膚化学講座</h4>
                            <p>サロン販売商品の肌へのアプローチを深め、販売促進に繋げます</p>
                            <dl className="course_dl">
                                <dt>
                                    <div>
                                        <p>全2回</p>
                                        <p>オンライン受講</p>
                                    </div>
                                </dt>
                                <dd>
                                    <p>計4時間<br />
                                        <span className="fs10">（テスト含む）</span>
                                    </p>
                                </dd>
                            </dl>
                            <h4>リラクゼーション講座</h4>
                            <p>マッサージでどのようなアプローチ方法があるか知識を深めます</p>
                            <dl className="course_dl">
                                <dt>
                                    <div>
                                        <p>全2回</p>
                                        <p>オンライン受講</p>
                                    </div>
                                </dt>
                                <dd>
                                    <p>計4時間<br />
                                        <span className="fs10">（テスト含む）</span>
                                    </p>
                                </dd>
                            </dl>
                            <p className="fs14">合格者に各講座合格証発行</p>
                            <p className="fs14">全ての講座合格者に、ネイルケアリスト協会の卒業認定証である、ネイルケアリスト認定証を発行</p>
                        </div>
                    </div>
                    <div className="course_manager course_wrapper">
                        <div className="course-title_wrapper">
                            <h3>管理者コース</h3>
                        </div>
                        <div className="course_inner">
                            <dl className="course_dl">
                                <dt>
                                    <div>
                                        <p>全2回</p>
                                        <p>オフライン受講</p>
                                    </div>
                                    <div>
                                        <p>全2回</p>
                                        <p>オンライン受講</p>
                                    </div>
                                </dt>
                                <dd>
                                    <p>計16時間</p>
                                    <p>経営方法と実践/事業計画の作り方</p>
                                </dd>
                            </dl>
                        </div>
                    </div>

                </div>
            </div>



                <div className="course-img is-flex mb20">
                    <div className="img-wrapper">
                        <img src="/course_01.jpg" alt="" />
                    </div>
                    <div className="img-wrapper">
                        <img src="/course_02.jpg" alt="" />
                    </div>
                </div>
                <div className="course-img img-wrapper">
                    <img src="/course_message_pc.jpg" alt="" className="img-pc" />
                    <img src="/course_message_sp.jpg" alt="" className="img-sp" />
                </div>
        </section>










        <section className="schedule">
            <div className="section-title_wrapper">
                <img src="/section-title.png" className='section-title_wrapper-img'/>
                <h2 id="schedule">スケジュール</h2>
                <span>Schedule</span>
            </div>
            <div className="section-inner">
                <div className="schedule_intro">
                    <p>初回講座　6/3(木) 19:00~</p>
                    <p>2回目以降の講座　毎週木曜日 19:00~</p>
                </div>
                <div>
                    <dl className="schedule_dl">
                        <div className="column_course">
                            <dt>
                                コース
                            </dt>
                            <dd>
                                ケア技術コース
                            </dd>
                            <dd>
                                xxxxコース
                            </dd>
                        </div>
                        <div className="column_period">
                            <dt>
                                受講期
                            </dt>
                            <dd>
                                <div>第1期<br />
                                    <span className="fs14">6/3(木)~</span>
                                </div>
                            </dd>
                            <dd>
                                <div>第x期<br />
                                    <span className="fs10">mm/dd(xx)スタート</span>
                                </div>
                            </dd>
                        </div>
                        <div className="column_download">
                            <dt className="border">
                                スケジュール表
                            </dt>
                            <dd>
                                <div id="schedule_calendar"><a href="schedule-001.pdf" target="_blank">スケジュール表はこちら</a></div>
                            </dd>
                            <dd>
                                <div id="schedule">スケジュール表はこちら</div>
                            </dd>
                        </div>
                    </dl>
                </div>
            </div>

        </section>
        <section className="fee">
            <div className="section-title_wrapper">
                <img src="/section-title.png" className='section-title_wrapper-img'/>
                <h2 id="fee">ご料金</h2>
                <span>Fee</span>
            </div>
            <div className="section-inner">
                <div className="fee_inner">
                    <dl className="fee_dl fee_entrancefee">
                        <dt>
                            入学金
                        </dt>
                        <dd>
                            <p>
                                22,000円
                            </p>
                        </dd>
                    </dl>
                    <div className="is-flex">
                        <dl className="fee_dl">
                            <dt>
                                ケア技術コース
                            </dt>
                            <dd>
                                <div>
                                    <p>オンライン受講　33,000円×6ヶ月</p>
                                    <p>オフライン実践講座　22,000円×6日間</p>
                                    <p>オフラインテスト検定料　5,500円</p>
                                    <p className="fs10">※同時申し込みで入学金22,000円免除</p>
                                </div>
                            </dd>
                        </dl>
                        <dl className="fee_dl">
                            <dt>
                                接客コース
                            </dt>
                            <dd>
                                <div>
                                    <p>接客講座　66,000円</p>
                                    <p>マナー講座　11,000円</p>
                                </div>
                            </dd>
                        </dl>
                    </div>
                    <div className="is-flex">
                        <dl className="fee_dl">
                            <dt>
                                プロコース
                            </dt>
                            <dd>
                                <div>
                                    <p>衛生講座 22,000円</p>
                                    <p>トラブルケア講座 27,500円</p>
                                    <p>美容皮膚科科学講座　16,500円</p>
                                    <p>リラクゼーション講座　16,500円</p>
                                </div>
                            </dd>
                        </dl>
                        <dl className="fee_dl">
                            <dt>
                                管理者コース
                            </dt>
                            <dd>
                                <p>82,500円×2日間</p>
                            </dd>
                        </dl>
                    </div>
                    <p className="fs14">お支払い方法</p>
                    <p className="fs14">クレジットカード、または本スクール指定のその他のお支払い方法で、記載された金額をお申し込みフォームよりお支払い下さい</p>
                </div>
            </div>
        </section>

        <section className="career">
            <div className="section-title_wrapper">
                <img src="/section-title.png" className='section-title_wrapper-img'/>
                <h2 id="career">受講終了後のキャリア</h2>
                <span>Career</span>
            </div>
            <div className="section-inner">
                <p className="mb40 text-c serif">ネイルケアリスト養成プログラム<br />受講修了生専用の就職先をご用意しております。</p>
                <div className="mb40">
                    <h3>
                        <span>就職</span>
                        オトコネイル
                    </h3>
                    <p>ネイルケアリスト協会の卒業認定証をお持ちの方は、オトコネイル入社試験を受けることができます。</p>
                    <p className="mb20">
                        東京5店舗、大阪1店舗、総来店数約10万人以上を誇る男性専用ネイルケアサロンです。独自の企業理念で働きやすい環境を用意し、しっかりとした事業計画の元、各メンバーがイキイキと働いているネイルサロンです。
                    </p>
                    <div className="img-wrapper">
                        <img src="/career.jpg" alt="オトコネイルで働くネイルケアリストの写真" />
                    </div>
                </div>
                <div className="mb40">
                    <h3>
                        <span>就職</span>
                        他ネイルサロン
                    </h3>
                    <p>ネイルケアリスト協会の卒業認定証をお持ちの方は、他のネイルサロンへの推薦状をお渡しします。卒業して1年間は推薦状を発行します。</p>
                </div>
                <div className="mb40">
                    <h3>
                        <span>フリー</span>
                        出張ネイルケアリスト
                    </h3>
                    <p>ネイルケアリスト協会の卒業認定証をお持ちの方は、出張ネイルケアリストとして登録をすることができます。</p>
                    <p>子育て中やダブルワークなどでサロン勤めを諦めている方でも、フリーのネイルケアリストとして活躍いただけるよう出張先候補を紹介いたします。</p>
                    <p>ホテル / 企業 / イベント</p>
                </div>
            </div>
        </section>

        <section className="flow">
            <div className="section-title_wrapper">
                <img src="/section-title.png" className='section-title_wrapper-img'/>
                <h2>受講開始フロー</h2>
                <span>Flow</span>
            </div>
            <div className="section-inner">
                <p className="serif text-c">資料請求をいただくと、<br />ネイルケアリスト協会パンフレットを無料でお届けいたします。</p>
                <p className="serif mb10 text-c">カリキュラム等の詳細は、オンラインでご説明いたします。</p>
                <p className="fs14 mb40">
                    ※初回授業前日までにご入金をお願いいたします。<br />
                    ※お申し込み後、申込書と証明写真3枚（横3cm縦4cm）を送付してください。<br />
                    ※後日、在籍証明書を発行、送付いたします。<br />
                </p>
                <div className="flow_caption">
                    <p>資料請求</p>
                    <p>お申し込み</p>
                    <p>ご契約締結</p>
                    <p>ご入金</p>
                    <p>受講開始</p>
                </div>
            </div>
        </section>

        <div className="catch" style={{background: "url(/bg-pattern.svg) center/cover"}}>
            <div className="program-title mb20">
                <p className="main-title">ネイルケアリスト養成プログラム</p>
                <p className="sub-title">あなたの目的に合わせた教育コース</p>
            </div>
            <div className="img-wrapper ">
                <img src="/catch_pc.png" alt="無料説明会にご参加ください" />
            </div>
            <div className="cta-btn is-flex">
                <div className="btn_info-session">
                    <div id="information_session">無料説明会はこちら</div>
                </div>
                <div className="btn_entry">
                    <div className="application_form">お申し込みはこちら</div>
                </div>
            </div>
        </div>

        <section className="for-online-lesson">
            <div className="section-title_wrapper">
                <img src="/section-title.png" className='section-title_wrapper-img'/>
                <h2>オンライン受講に関して</h2>
                <span>For OnlineLesson</span>
            </div>
            <div className="section-inner">
                <p className="serif mb20">オンライン受講には、以下の環境・ツールが必要です。</p>
                <div className="for-online-lesson_inner">
                    <dl>
                        <dt className="for-online-lesson_title">
                            受講環境
                        </dt>
                        <dd className="mb20">
                            <ul>
                                <li>
                                    <p>スマホもしくはカメラ付きPC</p>
                                </li>
                                <li>
                                    <p>ビデオ通話が可能なインターネット環境</p>
                                </li>
                                <li>
                                    <p>周囲の話し声や物音が気にならない場所</p>
                                    <p className="fs10">※カフェでの受講は周囲の音により集中力が低下するため非推奨です。</p>
                                </li>
                            </ul>
                        </dd>
                        <dt className="for-online-lesson_title">
                            必要ツール
                        </dt>
                        <dd className="mb20">
                            <p>Zoom（オンライン会議システム）</p>
                        </dd>
                        <dt className="for-online-lesson_title">
                            その他ご準備いただくもの
                        </dt>
                        <dd>
                            <p>マイク付きイヤホン ※マイク・イヤホン別でも可</p>
                        </dd>
                    </dl>
                </div>
            </div>
        </section>

        <section className="faq">
            <div className="section-title_wrapper">
                <img src="/section-title.png" className='section-title_wrapper-img'/>
                <h2 id="faq">よくあるお問い合わせ</h2>
                <span>FAQ</span>
            </div>
            <div className="section-inner">
                <div>
                    <dl className="listQA">
                        <dt>
                            <p>詳しいスケジュールを知りたいです</p>
                        </dt>
                        <dd>
                            <p>
                                説明会で詳細をお伝えいたします。無料でお気軽に参加いただけるので、ぜひ説明会にご参加ください。
                            </p>
                        </dd>
                    </dl>
                    <dl className="listQA">
                        <dt>
                            <p>講座の様子を知りたいです</p>
                        </dt>
                        <dd>
                            <p>
                                説明会で詳細をお伝えいたします。無料でお気軽に参加いただけるので、ぜひ説明会にご参加ください。
                            </p>
                        </dd>
                    </dl>
                    <dl className="listQA">
                        <dt>
                            <p>
                                オフライン講座の場所はどこですか？
                            </p>
                        </dt>
                        <dd>
                            <p>
                                東京都内です。秋葉原周辺を予定しております。
                            </p>
                        </dd>
                    </dl>
                    <dl className="listQA">
                        <dt>
                            <p>
                                未成年でも受講可能ですか？
                            </p>
                        </dt>
                        <dd>
                            <p>
                                はい。受講可能です。
                            </p>
                        </dd>
                    </dl>
                    <dl className="listQA">
                        <dt>
                            <p>
                                海外でも受講できますか？
                            </p>
                        </dt>
                        <dd>
                            <p>
                                いいえ。現在対応しておりません。国内での受講をお願いします。
                            </p>
                        </dd>
                    </dl>
                    <dl className="listQA">
                        <dt>
                            <p>
                                支払い期日はいつまでですか？
                            </p>
                        </dt>
                        <dd>
                            <p>
                                受講開始日の前日までとなっております。例えば、4月15日受講開始の場合、4月14日までが期日となります。
                            </p>
                        </dd>
                    </dl>
                    <dl className="listQA">
                        <dt>
                            <p>
                                領収書の発行依頼の方法を教えてください
                            </p>
                        </dt>
                        <dd>
                            <p>
                                運営事務局（info@nailcarelist.com）へメールにてご希望の宛名を添えて領収書の発行をご希望の旨をご連絡ください。
                            </p>
                        </dd>
                    </dl>
                    <dl className="listQA">
                        <dt>
                            <p>
                                すべての受講時間に参加できません。<br />
                                一部の時間のみ参加することは可能でしょうか？
                            </p>
                        </dt>
                        <dd>
                            <p>
                                いいえ。一部の学習時間のみ参加していただくことはできかねます。必ずスケジュール通りにご参加ください。
                            </p>
                        </dd>
                    </dl>
                    <dl className="listQA">
                        <dt>
                            <p>
                                講師に質問は可能ですか？
                            </p>
                        </dt>
                        <dd>
                            <p>
                                受講期間中に質問可能期間があります。講師への質問は、質問期間中にお願いいたします。
                            </p>
                        </dd>
                    </dl>
                </div>
                <p>その他、ご不明な点がございましたら運営事務局までお問い合わせください。</p>
            </div>
        </section>

    </main>
    <footer>
        <div className="footer_inner is-flex">
            <div className="footer-content">
                <p className="footer-content-title">SNS</p>
                <ul className="footer_sns">
                    <li>
                        <div className="img-wrapper">
                            <img src="/sns_line.png" alt="ネイルケアリスト協会のLINEアカウント" />
                        </div>
                        <a href="https://page.line.me/?accountId=100udhtx" target="_blank" rel="noopener noreferrer">
                            ネイルケアリスト協会 公式LINE
                        </a>
                    </li>
                    <li>
                        <div className="img-wrapper">
                            <img src="/sns_instagram.png" alt="ネイルケアリスト協会のInstagram" />
                        </div>
                        <a href="https://www.instagram.com/nailcarelist_ltd/" target="_blank" rel="noopener noreferrer">
                            ネイルケアリスト協会 Instagram
                        </a>
                    </li>
                    <li>
                        <div className="img-wrapper">
                            <img src="/sns_instagram.png" alt="オトコネイルのInstagram" />
                        </div>
                        <a href="https://www.instagram.com/otokonail/" target="_blank" rel="noopener noreferrer">
                            オトコネイル Instagram
                        </a>
                    </li>
                </ul>
            </div>
            <div className="footer-content">
                <p className="footer-content-title">お問い合わせ</p>
                <p>ネイルケアリスト協会 運営事務局</p>
                <p>MAIL:<a href="mailto:info@nail-carelist.com">info@nail-carelist.com</a></p>
                <p className="fs10">※ご連絡頂いた後、3営業日以内に返信いたします。<br />
                    （定休日：土・日・祝日）<br />
                    ※電話でのお問い合わせ窓口の設置はございません。</p>
            </div>
            <div className="footer-content">
                <p className="footer-content-title">プロデュース店舗</p>
                <div className="footer_otokonail">
                <div className="img-wrapper">
                    <img src="/otokonail_logo.jpg" alt="オトコネイルのロゴ" width="180" />
                </div>
                <p>都内5店舗<br />大阪1店舗展開<br />
                    メンズネイル専門店<br />
                    <a href="https://otokonail.com/" target="_blank" rel="noopener noreferrer">「オトコネイル」</a></p>
                </div>
            </div>
        </div>
        <div className="footer_nav">
            <ul>
                <li>運営会社<br />
                    株式会社ネイルケアリスト協会</li>
                <li>
                    <div id="terms">利用規約</div>
                </li>
            </ul>
        </div>
        <small>&copy;Nail Carelist Ltd.</small>
    </footer>
    <div id="dialog"></div>
    </>
  );
}

export default App;
