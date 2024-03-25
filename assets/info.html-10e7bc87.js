import{_ as e,r as p,o,c as d,a as n,b as t,d as r,w as l,e as s}from"./app-6aea71e0.js";const c={},i=s('<h1 id="大会员信息" tabindex="-1"><a class="header-anchor" href="#大会员信息" aria-hidden="true">#</a> 大会员信息</h1><h2 id="卡券状态查询" tabindex="-1"><a class="header-anchor" href="#卡券状态查询" aria-hidden="true">#</a> 卡券状态查询</h2><blockquote><p>https://api.bilibili.com/x/vip/privilege/my</p></blockquote><p><em>请求方式：GET</em></p><p>认证方式：Cookie (SESSDATA) / access_key</p><p><strong>json回复：</strong></p><p>根对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>返回值</td><td>-101：账号未登录<br>-400：请求错误<br>0：成功</td></tr><tr><td>message</td><td>str</td><td>错误信息</td><td></td></tr><tr><td>ttl</td><td>num</td><td>1</td><td></td></tr><tr><td>data</td><td>obj</td><td>信息本体</td><td></td></tr></tbody></table><p><code>data</code>对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>list</td><td>array</td><td>卡券信息列表</td><td></td></tr><tr><td>is_short_vip</td><td>bool</td><td>(?)</td><td></td></tr><tr><td>is_freight_open</td><td>bool</td><td>(?)</td><td></td></tr><tr><td>level</td><td>num</td><td>当前等级</td><td></td></tr><tr><td>cur_exp</td><td>num</td><td>当前拥有经验值</td><td></td></tr><tr><td>next_exp</td><td>num</td><td>升级所需经验值</td><td>满级时为 -1</td></tr><tr><td>is_vip</td><td>bool</td><td>是否为大会员</td><td></td></tr><tr><td>is_senior_member</td><td>num</td><td>(?)</td><td></td></tr><tr><td>format060102</td><td>num</td><td>(?)</td><td></td></tr></tbody></table><p><code>list</code>数组：</p><table><thead><tr><th>索引</th><th>类型</th><th>内容</th><th>type</th><th>备注</th></tr></thead><tbody><tr><td>0</td><td>obj</td><td>B币兑换状态</td><td>1</td><td></td></tr><tr><td>1</td><td>obj</td><td>会员购优惠券兑换状态</td><td>2</td><td></td></tr><tr><td>2</td><td>obj</td><td>漫画福利券兑换状态</td><td>3</td><td></td></tr><tr><td>3</td><td>obj</td><td>会员购包邮券兑换状态</td><td>4</td><td></td></tr><tr><td>4</td><td>obj</td><td>漫画商城优惠券兑换状态</td><td>5</td><td></td></tr><tr><td>5</td><td>obj</td><td>装扮体验卡兑换状态</td><td>6</td><td></td></tr><tr><td>6</td><td>obj</td><td>课堂优惠券兑换状态</td><td>7</td><td></td></tr><tr><td>7</td><td>obj</td><td>（<s>王者荣耀</s>）游戏礼盒兑换状态</td><td>8</td><td>每日可领取，目前 state 固定为 1</td></tr><tr><td>8</td><td>obj</td><td>每日 10 经验领取状态</td><td>9</td><td>每日可领取，未完成时 state 为 2</td></tr></tbody></table><p><code>list</code>中的对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>type</td><td>num</td><td>卡券类型</td><td>详见 <code>list</code> 数组表格中的 <code>type</code> 项</td></tr><tr><td>state</td><td>num</td><td>兑换状态</td><td>0：未兑换<br>1：已兑换<br>2：未完成（若需要完成）</td></tr><tr><td>expire_time</td><td>num</td><td>本轮卡券过期时间戳</td><td>当月月底/当日24点</td></tr><tr><td>vip_type</td><td>num</td><td>当前用户的大会员状态</td><td>2：年度大会员</td></tr><tr><td>next_receive_days</td><td>num</td><td>距下一轮兑换剩余天数</td><td>无权限时，每月任务固定为 0，每日固定为 1</td></tr><tr><td>period_end_unix</td><td>num</td><td>下一轮兑换开始时间戳</td><td>秒级时间戳</td></tr></tbody></table>',14),u=n("strong",null,"注意：",-1),k=n("code",null,"type",-1),v=n("code",null,"8",-1),b=n("code",null,"9",-1),m=n("br",null,null,-1),_=n("code",null,"type",-1),h=n("code",null,"9",-1),q=n("code",null,"state",-1),y=s(`<p><strong>示例：</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token string">&#39;https://api.bilibili.com/x/vip/privilege/my&#39;</span> <span class="token punctuation">\\</span>
	<span class="token parameter variable">-b</span> <span class="token string">&quot;SESSDATA=xxx&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><details><summary>查看响应示例：</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;ttl&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token property">&quot;state&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;expire_time&quot;</span><span class="token operator">:</span> <span class="token number">1667231999</span><span class="token punctuation">,</span>
        <span class="token property">&quot;vip_type&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token property">&quot;next_receive_days&quot;</span><span class="token operator">:</span> <span class="token number">29</span><span class="token punctuation">,</span>
        <span class="token property">&quot;period_end_unix&quot;</span><span class="token operator">:</span> <span class="token number">1667491200</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token property">&quot;state&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;expire_time&quot;</span><span class="token operator">:</span> <span class="token number">1667231999</span><span class="token punctuation">,</span>
        <span class="token property">&quot;vip_type&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token property">&quot;next_receive_days&quot;</span><span class="token operator">:</span> <span class="token number">29</span><span class="token punctuation">,</span>
        <span class="token property">&quot;period_end_unix&quot;</span><span class="token operator">:</span> <span class="token number">1667491200</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
        <span class="token property">&quot;state&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;expire_time&quot;</span><span class="token operator">:</span> <span class="token number">1667231999</span><span class="token punctuation">,</span>
        <span class="token property">&quot;vip_type&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token property">&quot;next_receive_days&quot;</span><span class="token operator">:</span> <span class="token number">29</span><span class="token punctuation">,</span>
        <span class="token property">&quot;period_end_unix&quot;</span><span class="token operator">:</span> <span class="token number">1667491200</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
        <span class="token property">&quot;state&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;expire_time&quot;</span><span class="token operator">:</span> <span class="token number">1667231999</span><span class="token punctuation">,</span>
        <span class="token property">&quot;vip_type&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token property">&quot;next_receive_days&quot;</span><span class="token operator">:</span> <span class="token number">29</span><span class="token punctuation">,</span>
        <span class="token property">&quot;period_end_unix&quot;</span><span class="token operator">:</span> <span class="token number">1667491200</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
        <span class="token property">&quot;state&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;expire_time&quot;</span><span class="token operator">:</span> <span class="token number">1667231999</span><span class="token punctuation">,</span>
        <span class="token property">&quot;vip_type&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token property">&quot;next_receive_days&quot;</span><span class="token operator">:</span> <span class="token number">29</span><span class="token punctuation">,</span>
        <span class="token property">&quot;period_end_unix&quot;</span><span class="token operator">:</span> <span class="token number">1667491200</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;is_short_vip&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">&quot;is_freight_open&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,3);function x(g,f){const a=p("RouterLink");return o(),d("div",null,[i,n("p",null,[u,t(" 卡券除每日可领取（"),k,t(" 为 "),v,t(" 和 "),b,t("）的，其他可通过 "),r(a,{to:"/docs/vip/action.html#%E5%85%91%E6%8D%A2%E5%8D%A1%E5%88%B8"},{default:l(()=>[t("https://api.bilibili.com/x/vip/privilege/receive")]),_:1}),t(" 领取"),m,t(" 每日 10 经验领取（"),_,t(" 为 "),h,t("）需要完成视频观看，未完成的 "),q,t(" 为 2。")]),y])}const E=e(c,[["render",x],["__file","info.html.vue"]]);export{E as default};
