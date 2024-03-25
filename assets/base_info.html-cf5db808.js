import{_ as t,o as s,c as n,e as a}from"./app-6aea71e0.js";const d={},e=a(`<h1 id="风纪委员会用户基本信息" tabindex="-1"><a class="header-anchor" href="#风纪委员会用户基本信息" aria-hidden="true">#</a> 风纪委员会用户基本信息</h1><h2 id="基本数据" tabindex="-1"><a class="header-anchor" href="#基本数据" aria-hidden="true">#</a> 基本数据</h2><blockquote><p>https://api.bilibili.com/x/credit/v2/jury/jury</p></blockquote><p><em>请求方式：GET</em></p><p>认证方式：Cookie（SESSDATA）或 APP</p><p><strong>url 参数：</strong></p><table><thead><tr><th>参数名</th><th>类型</th><th>内容</th><th>必要性</th><th>备注</th></tr></thead><tbody><tr><td>access_key</td><td>str</td><td>APP 登录 Token</td><td>APP 方式必要</td><td></td></tr></tbody></table><p><strong>json 回复：</strong></p><p>根对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>返回值</td><td>0：成功<br>-101：账号未登录</td></tr><tr><td>message</td><td>str</td><td>信息</td><td>默认为 0</td></tr><tr><td>ttl</td><td>num</td><td>1</td><td></td></tr><tr><td>data</td><td>object</td><td>数据本体</td><td></td></tr></tbody></table><p><code>data</code> 对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>allow_apply</td><td>bool</td><td>true</td><td>尚不明确（用户从未担任风纪委员时也为 true）</td></tr><tr><td>apply_status</td><td>num</td><td>任期审核状态</td><td>-1 资格失效，且未申请<br>0 刚申请连任时<br>5 申请后，等待审核<br>3 申请连任成功，status 为 1</td></tr><tr><td>case_total</td><td>num</td><td>总众裁数</td><td></td></tr><tr><td>err_msg</td><td>str</td><td>空</td><td>尚不明确</td></tr><tr><td>face</td><td>str</td><td>用户头像 url</td><td></td></tr><tr><td>status</td><td>num</td><td>当前资格状态</td><td>0 未曾拥有资格<br>1 任期内<br>2 资格失效</td></tr><tr><td>term_end</td><td>num</td><td>任期结束时间</td><td>时间戳（秒级），无任期时为 0</td></tr><tr><td>uname</td><td>str</td><td>用户昵称</td><td></td></tr></tbody></table><h2 id="基本数据-旧api" tabindex="-1"><a class="header-anchor" href="#基本数据-旧api" aria-hidden="true">#</a> 基本数据(旧API)</h2><p>部分字段信息停留在 2021 年 10 月。</p><details><summary>查看折叠内容：</summary><blockquote><p>https://api.bilibili.com/x/credit/jury/jury</p></blockquote><p>根数据与新 API 一致，<code>data</code> 对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>caseTotal</td><td>num</td><td>总众裁数</td><td></td></tr><tr><td>face</td><td>str</td><td>用户头像 url</td><td></td></tr><tr><td>restDays</td><td>num</td><td>当前资格剩余天数</td><td>自 2021 年 10 月起，固定为 0</td></tr><tr><td>rightRadio</td><td>num</td><td>当前裁决正确率百分比</td><td>裁决数小于 3 时固定为 50</td></tr><tr><td>status</td><td>num</td><td>当前状态</td><td>1：具有资格<br>2：资格失效</td></tr><tr><td>uname</td><td>str</td><td>用户昵称</td><td></td></tr></tbody></table></details><h2 id="统计信息" tabindex="-1"><a class="header-anchor" href="#统计信息" aria-hidden="true">#</a> 统计信息</h2><p>新API(2021年10月任期之后)</p><blockquote><p>https://api.bilibili.com/x/credit/v2/jury/kpi</p></blockquote><p><em>方式：GET</em></p><p>认证方式：Cookie</p><p><strong>备注</strong>：该api只收录2021年10月开始，风纪委员改版之后的数据，且每次只返回一次任期的数据。</p><p><strong>url参数：</strong></p><table><thead><tr><th>参数名</th><th>类型</th><th>内容</th><th>必要性</th><th>备注</th></tr></thead><tbody><tr><td>term_id</td><td>num</td><td>任期 id</td><td>可不传此参数或将值留空或设为<code>0</code></td><td>未传参或留空时，<strong>只</strong>返回最近一次已结束的任期的数据</td></tr></tbody></table><p><strong>json回复：</strong></p><p>根对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>返回值</td><td>0：成功<br>-101：账号未登录<br>25018：不能进行此操作（还没有成为新风纪委员，或传入了不属于你的<code>term_id</code>）</td></tr><tr><td>message</td><td>str</td><td>信息</td><td>默认为 0</td></tr><tr><td>ttl</td><td>num</td><td>1</td><td></td></tr><tr><td>data</td><td>object</td><td>数据本体</td><td></td></tr></tbody></table><p><code>data</code> 对象：</p><table><thead><tr><th>项</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>mid</td><td>num</td><td>用户 UID</td><td></td></tr><tr><td>uname</td><td>str</td><td>留空</td><td></td></tr><tr><td>face</td><td>str</td><td>留空</td><td></td></tr><tr><td>term_id</td><td>num</td><td>任期 ID</td><td>未传入<code>term_id</code>时，返回的是最近一次已结束的任期的id</td></tr><tr><td>term_start</td><td>num</td><td>任期开始时间</td><td>时间戳，精确到秒</td></tr><tr><td>term_end</td><td>num</td><td>任期结束时间</td><td>时间戳，精确到秒</td></tr><tr><td>case_total</td><td>num</td><td>任内总投票数</td><td></td></tr><tr><td>active_days</td><td>num</td><td>活跃天数</td><td></td></tr><tr><td>like_num</td><td>num</td><td>发表观点，被点赞数</td><td></td></tr><tr><td>accuracy_rate</td><td>num</td><td>投中率</td><td>所选观点与大多数风纪委员一致，记为一次“投中”</td></tr><tr><td>pass</td><td>num</td><td>任期是否合格</td><td>0 不合格<br>1 合格</td></tr><tr><td>status</td><td>num</td><td>当前资格状态</td><td>0 未曾拥有资格<br>1 任期内<br>2 资格失效</td></tr><tr><td>apply_status</td><td>num</td><td>当前资格申请状态</td><td>-1 资格失效，且未申请<br>0 刚申请连任时<br>5 申请后，等待审核<br>3 申请连任成功，status 为 1</td></tr><tr><td>prev_term_id</td><td>num</td><td>上一任期的任期 ID</td><td>新版风纪委员启用后的第一个任期，此项的值为 0</td></tr><tr><td>next_term_id</td><td>num</td><td>下一任期的任期 ID</td><td>若当前任期尚未结束，此项的值为 0</td></tr><tr><td>rewards</td><td>object</td><td>任期奖励</td><td>有<code>pendant</code>和<code>coin</code>两个子项</td></tr><tr><td>rewards.pendant</td><td>num</td><td>头像挂件礼包 ID</td><td>合格后一般为 1，不合格为 0</td></tr><tr><td>rewards.coin</td><td>num</td><td>硬币礼包 ID</td><td>合格后一般为 3，不合格为 0</td></tr></tbody></table><details><summary>查看响应示例：</summary><p>注：本示例未传入<code>term_id</code>，返回的是最近一次已结束任期的统计结果</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;ttl&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;mid&quot;</span><span class="token operator">:</span> <span class="token number">10001</span><span class="token punctuation">,</span>
        <span class="token property">&quot;uname&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;face&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;term_id&quot;</span><span class="token operator">:</span> <span class="token number">300009</span><span class="token punctuation">,</span>
        <span class="token property">&quot;term_start&quot;</span><span class="token operator">:</span> <span class="token number">1669100000</span><span class="token punctuation">,</span>
        <span class="token property">&quot;term_end&quot;</span><span class="token operator">:</span> <span class="token number">1671690000</span><span class="token punctuation">,</span>
        <span class="token property">&quot;case_total&quot;</span><span class="token operator">:</span> <span class="token number">591</span><span class="token punctuation">,</span>
        <span class="token property">&quot;active_days&quot;</span><span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span>
        <span class="token property">&quot;like_num&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;accuracy_rate&quot;</span><span class="token operator">:</span> <span class="token number">74</span><span class="token punctuation">,</span>
        <span class="token property">&quot;pass&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token property">&quot;apply_status&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
        <span class="token property">&quot;prev_term_id&quot;</span><span class="token operator">:</span> <span class="token number">300007</span><span class="token punctuation">,</span>
        <span class="token property">&quot;next_term_id&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;rewards&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;pendant&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;coin&quot;</span><span class="token operator">:</span> <span class="token number">3</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="统计信息-旧api" tabindex="-1"><a class="header-anchor" href="#统计信息-旧api" aria-hidden="true">#</a> 统计信息(旧API)</h2><details><summary>查看折叠内容：</summary><blockquote><p>https://api.bilibili.com/x/credit/jury/kpi</p></blockquote><p><em>方式：GET</em></p><p>认证方式：Cookie（SESSDATA）或APP</p><p><strong>备注</strong>：该api只统计到2021年9月任期，风纪委员改版之前。风纪委员改版之后的数据未收录</p><p><strong>url参数：</strong></p><table><thead><tr><th>参数名</th><th>类型</th><th>内容</th><th>必要性</th><th>备注</th></tr></thead><tbody><tr><td>access_key</td><td>str</td><td>APP登录Token</td><td>APP方式必要</td><td></td></tr></tbody></table><p><strong>json回复：</strong></p><p>根对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>返回值</td><td>0：成功<br>-101：账号未登录</td></tr><tr><td>message</td><td>str</td><td>信息</td><td>默认为0</td></tr><tr><td>ttl</td><td>num</td><td>1</td><td></td></tr><tr><td>data</td><td>array</td><td>数据本体</td><td></td></tr></tbody></table><p><code>data</code>数组：</p><table><thead><tr><th>项</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>0</td><td>obj</td><td>第1个月统计</td><td></td></tr><tr><td>n</td><td>obj</td><td>第（n+1）个月统计</td><td></td></tr><tr><td>……</td><td>obj</td><td>……</td><td>……</td></tr></tbody></table><p><code>data</code> 数组中的对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>id</td><td>num</td><td>0</td><td></td></tr><tr><td>mid</td><td>num</td><td>用户id</td><td></td></tr><tr><td>number</td><td>num</td><td>风纪委员编号</td><td></td></tr><tr><td>day</td><td>num</td><td>数据生成时间（也是任期结束时间）</td><td>时间戳，精确到秒</td></tr><tr><td>rate</td><td>num</td><td>任期完成度</td><td>1=A；2=S；3=S+；4=S++</td></tr><tr><td>rank</td><td>num</td><td>尚不明确</td><td></td></tr><tr><td>rankper</td><td>num</td><td>尚不明确</td><td></td></tr><tr><td>rankTotal</td><td>num</td><td>尚不明确</td><td></td></tr><tr><td>point</td><td>num</td><td>32767</td><td></td></tr><tr><td>activeDays</td><td>num</td><td>活跃天数</td><td></td></tr><tr><td>voteTotal</td><td>num</td><td>投票总数</td><td></td></tr><tr><td>voteRadio</td><td>num</td><td>投中率</td><td></td></tr><tr><td>blockedTotal</td><td>num</td><td>尚不明确</td><td></td></tr><tr><td>termStart</td><td>num</td><td>任期开始时间</td><td>时间戳，精确到秒</td></tr><tr><td>termEnd</td><td>num</td><td>任期结束时间（数据生成时间一致）</td><td>时间戳，精确到秒</td></tr><tr><td>opinion_likes</td><td>num</td><td>观点获赞</td><td></td></tr></tbody></table><p><strong>示例：</strong></p><p>Cookie方式：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token string">&#39;https://api.bilibili.com/x/credit/jury/kpi&#39;</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-b</span> <span class="token string">&#39;SESSDATA=xxx&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>APP方式：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-G</span> <span class="token string">&#39;https://api.bilibili.com/x/credit/jury/kpi&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;access_key=xxx&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><details><summary>查看响应示例：</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;ttl&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;mid&quot;</span><span class="token operator">:</span> <span class="token number">114343368</span><span class="token punctuation">,</span>
            <span class="token property">&quot;number&quot;</span><span class="token operator">:</span> <span class="token number">199046</span><span class="token punctuation">,</span>
            <span class="token property">&quot;day&quot;</span><span class="token operator">:</span> <span class="token number">1539792000</span><span class="token punctuation">,</span>
            <span class="token property">&quot;rate&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;rank&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;rankper&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;rankTotal&quot;</span><span class="token operator">:</span> <span class="token number">39584</span><span class="token punctuation">,</span>
            <span class="token property">&quot;point&quot;</span><span class="token operator">:</span> <span class="token number">32767</span><span class="token punctuation">,</span>
            <span class="token property">&quot;activeDays&quot;</span><span class="token operator">:</span> <span class="token number">23</span><span class="token punctuation">,</span>
            <span class="token property">&quot;voteTotal&quot;</span><span class="token operator">:</span> <span class="token number">422</span><span class="token punctuation">,</span>
            <span class="token property">&quot;voteRadio&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;blockedTotal&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;termStart&quot;</span><span class="token operator">:</span> <span class="token number">1537200000</span><span class="token punctuation">,</span>
            <span class="token property">&quot;termEnd&quot;</span><span class="token operator">:</span> <span class="token number">1539792000</span><span class="token punctuation">,</span>
            <span class="token property">&quot;opinion_likes&quot;</span><span class="token operator">:</span> <span class="token number">18</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details></details><h2 id="检查申请风纪委员会资格" tabindex="-1"><a class="header-anchor" href="#检查申请风纪委员会资格" aria-hidden="true">#</a> 检查申请风纪委员会资格</h2><blockquote><p><s>https://api.bilibili.com/x/credit/jury/requirement</s> (旧版）</p></blockquote><blockquote><p>https://api.bilibili.com/x/credit/v2/jury/requirement (新版)</p></blockquote><p><em>请求方式：GET</em></p><p>认证方式：Cookie（SESSDATA）或APP</p><p>新版 api 与旧版的区别仅在新版没有 <code>level</code> 字段（新版风纪委员没有等级限制）。</p><p>只有用户<s>会员等级≥Lv4、</s> 90 天内无违规、实名认证且非封禁状态才可以申请加入风纪委员会。</p><p><strong>url参数：</strong></p><table><thead><tr><th>参数名</th><th>类型</th><th>内容</th><th>必要性</th><th>备注</th></tr></thead><tbody><tr><td>access_key</td><td>str</td><td>APP登录Token</td><td>APP方式必要</td><td></td></tr></tbody></table><p><strong>json回复：</strong></p><p>根对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>返回值</td><td>0：成功<br>-101：账号未登录</td></tr><tr><td>message</td><td>str</td><td>信息</td><td>默认为0</td></tr><tr><td>ttl</td><td>num</td><td>1</td><td></td></tr><tr><td>data</td><td>object</td><td>数据本体</td><td></td></tr></tbody></table><p><code>data</code> 对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>blocked</td><td>bool</td><td>是否被封禁</td><td>true：是<br>false：否<br><strong>下同</strong></td></tr><tr><td>cert</td><td>bool</td><td>是否实名认证</td><td></td></tr><tr><td>level</td><td>bool</td><td>等级是否&gt;=4</td><td>新版无该字段</td></tr><tr><td>rule</td><td>bool</td><td>是否90天内无违规</td><td></td></tr></tbody></table><p><strong>示例：</strong></p><p>Cookie方式：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token string">&#39;https://api.bilibili.com/x/credit/v2/jury/requirement&#39;</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-b</span> <span class="token string">&#39;SESSDATA=xxx&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>APP方式：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-G</span> <span class="token string">&#39;https://api.bilibili.com/x/credit/v2/jury/requirement&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;access_key=xxx&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><details><summary>查看响应示例：</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;ttl&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;blocked&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token property">&quot;cert&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token property">&quot;rule&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,51),p=[e];function o(r,l){return s(),n("div",null,p)}const u=t(d,[["render",o],["__file","base_info.html.vue"]]);export{u as default};
