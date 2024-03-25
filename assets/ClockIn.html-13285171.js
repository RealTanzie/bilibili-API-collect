import{_ as n,o as s,c as a,e as t}from"./app-6aea71e0.js";const p={},o=t(`<h1 id="签到" tabindex="-1"><a class="header-anchor" href="#签到" aria-hidden="true">#</a> 签到</h1><blockquote><p>https://manga.bilibili.com/twirp/activity.v1.Activity/ClockIn</p></blockquote><p><em>请求方式：POST</em></p><p>认证方式：Cookie（SESSDATA）/ APP</p><p><strong>正文参数（ application/x-www-form-urlencoded ）：</strong></p><table><thead><tr><th>参数名</th><th>类型</th><th>内容</th><th>必要性</th><th>备注</th></tr></thead><tbody><tr><td>platform</td><td>str</td><td>平台</td><td>必要</td><td>android</td></tr><tr><td>device</td><td>str</td><td>平台</td><td>非必要</td><td>h5</td></tr></tbody></table><p><strong>正文参数（ application/json ）：</strong></p><table><thead><tr><th>参数名</th><th>类型</th><th>内容</th><th>必要性</th><th>备注</th></tr></thead><tbody><tr><td>type</td><td>num</td><td></td><td>非必要</td><td>补签时使用</td></tr><tr><td>date</td><td>str</td><td>补签日期</td><td>必要</td><td>补签时使用</td></tr></tbody></table><p><strong>json回复：</strong></p><p>根对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num / str</td><td>返回值</td><td>0：成功<br>invalid_argument：今日已签到</td></tr><tr><td>msg</td><td>str</td><td>错误信息</td><td>成功：空<br>已签到：clockin clockin is duplicate</td></tr><tr><td>meta</td><td>obj</td><td>错误信息</td><td>今日已签到时存在</td></tr><tr><td>data</td><td>obj</td><td></td><td></td></tr></tbody></table><p><strong>示例：</strong></p><p>普通签到：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-L</span> <span class="token parameter variable">-X</span> POST <span class="token string">&#39;https://manga.bilibili.com/twirp/activity.v1.Activity/ClockIn&#39;</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-H</span> <span class="token string">&#39;Cookie: SESSDATA=xxx&#39;</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-H</span> <span class="token string">&#39;Content-Type: application/x-www-form-urlencoded&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;platform=android&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details><summary>签到成功：</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">&quot;msg&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><details><summary>今日已签到：</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token string">&quot;invalid_argument&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;msg&quot;</span><span class="token operator">:</span> <span class="token string">&quot;clockin clockin is duplicate&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;meta&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;argument&quot;</span><span class="token operator">:</span> <span class="token string">&quot;clockin&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><p>补签：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-L</span> <span class="token string">&#39;https://manga.bilibili.com/twirp/activity.v1.Activity/ClockIn?platform=android&#39;</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-H</span> <span class="token string">&#39;Cookie: SESSDATA=xxx&#39;</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-H</span> <span class="token string">&#39;content-type: application/json;charset=UTF-8&#39;</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-d</span> <span class="token string">&#39;{&quot;type&quot;:0,&quot;date&quot;:&quot;2023-02-15&quot;}&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details><summary>补签成功：</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">&quot;msg&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h1 id="查询签到状态" tabindex="-1"><a class="header-anchor" href="#查询签到状态" aria-hidden="true">#</a> 查询签到状态</h1><blockquote><p>https://manga.bilibili.com/twirp/activity.v1.Activity/GetClockInInfo</p></blockquote><p><em>请求方式：POST</em></p><p>认证方式：Cookie（SESSDATA）/ APP</p><p><strong>json回复：</strong></p><p>根对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>返回值</td><td>0：成功</td></tr><tr><td>msg</td><td>str</td><td>错误信息</td><td>空</td></tr><tr><td>data</td><td>obj</td><td>信息本体</td><td></td></tr></tbody></table><p><code>data</code> 对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>day_count</td><td>num</td><td>连续签到天数</td><td></td></tr><tr><td>status</td><td>num</td><td>今日是否已签到</td><td>0：未签到<br>1：已签到</td></tr><tr><td>credit_icon</td><td>str</td><td></td><td></td></tr><tr><td>sign_before_icon</td><td>str</td><td></td><td></td></tr><tr><td>sign_today_icon</td><td>str</td><td></td><td></td></tr><tr><td>breathe_icon</td><td>str</td><td></td><td></td></tr><tr><td>new_credit_x_icon</td><td>str</td><td></td><td></td></tr><tr><td>coupon_pic</td><td>str</td><td></td><td></td></tr><tr><td>points</td><td>array</td><td>一次签到周期中每次签到可获得点数</td><td></td></tr><tr><td>point_infos</td><td>array</td><td></td><td></td></tr></tbody></table><p><code>point_infos</code>数组中的对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>point</td><td>num</td><td>签到可获取积分</td><td></td></tr><tr><td>origin_point</td><td>num</td><td></td><td></td></tr><tr><td>is_activity</td><td>bool</td><td></td><td></td></tr><tr><td>title</td><td>str</td><td>签到奖励描述</td><td></td></tr></tbody></table><p><strong>示例：</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-L</span> <span class="token parameter variable">-X</span> POST <span class="token string">&#39;https://manga.bilibili.com/twirp/activity.v1.Activity/GetClockInInfo&#39;</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-H</span> <span class="token string">&#39;Cookie: SESSDATA=xxx&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><details><summary>成功：</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">&quot;msg&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;day_count&quot;</span><span class="token operator">:</span> <span class="token number">58</span><span class="token punctuation">,</span>
    <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;points&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token number">10</span><span class="token punctuation">,</span>
      <span class="token number">20</span><span class="token punctuation">,</span>
      <span class="token number">20</span><span class="token punctuation">,</span>
      <span class="token number">10</span><span class="token punctuation">,</span>
      <span class="token number">10</span><span class="token punctuation">,</span>
      <span class="token number">10</span><span class="token punctuation">,</span>
      <span class="token number">30</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;credit_icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://i0.hdslb.com/bfs/static/manga/artifact/sign-resource/v2/9da6QImiK_w192_h192.png&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;sign_before_icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://i0.hdslb.com/bfs/static/manga/artifact/sign-resource/v2/BuA6z3lhN_w192_h192.png&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;sign_today_icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://i0.hdslb.com/bfs/static/manga/artifact/sign-resource/v2/TWSLUHbbg_w192_h192.png&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;breathe_icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://i0.hdslb.com/bfs/static/manga/artifact/sign-resource/anime.breathe.svga&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;point_infos&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;point&quot;</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
        <span class="token property">&quot;origin_point&quot;</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
        <span class="token property">&quot;is_activity&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;10积分&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;point&quot;</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
        <span class="token property">&quot;origin_point&quot;</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
        <span class="token property">&quot;is_activity&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;20积分&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;point&quot;</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
        <span class="token property">&quot;origin_point&quot;</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
        <span class="token property">&quot;is_activity&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;20积分&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;point&quot;</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
        <span class="token property">&quot;origin_point&quot;</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
        <span class="token property">&quot;is_activity&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;10积分&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;point&quot;</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
        <span class="token property">&quot;origin_point&quot;</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
        <span class="token property">&quot;is_activity&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;10积分&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;point&quot;</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
        <span class="token property">&quot;origin_point&quot;</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
        <span class="token property">&quot;is_activity&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;10积分&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;point&quot;</span><span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span>
        <span class="token property">&quot;origin_point&quot;</span><span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span>
        <span class="token property">&quot;is_activity&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;30积分+福利券&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;new_credit_x_icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://i0.hdslb.com/bfs/static/manga/artifact/sign-resource/v2/QP5DsW2S_w192_h192.png&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;coupon_pic&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://i0.hdslb.com/bfs/static/manga/artifact/sign-resource/v2/Yalqqoiz_w402_h162.png&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,33),e=[o];function i(c,l){return s(),a("div",null,e)}const d=n(p,[["render",i],["__file","ClockIn.html.vue"]]);export{d as default};