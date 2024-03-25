import{_ as d,r as o,o as i,c,a as n,d as a,w as e,b as s,e as l}from"./app-6aea71e0.js";const u={},r=n("h1",{id:"用户注册",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#用户注册","aria-hidden":"true"},"#"),s(" 用户注册")],-1),p=n("h2",{id:"人机验证",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#人机验证","aria-hidden":"true"},"#"),s(" 人机验证")],-1),b=n("p",null,[s("完成后得到"),n("code",null,"key"),s(", "),n("code",null,"challenge"),s(", "),n("code",null,"validate"),s(", "),n("code",null,"seccode"),s("四个参数")],-1),h=n("h2",{id:"发送短信验证码",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#发送短信验证码","aria-hidden":"true"},"#"),s(" 发送短信验证码")],-1),m=l(`<p><strong>注意不同的是这里type=1而非21</strong>,推测此参数决定短信内容</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token string">&#39;https://passport.bilibili.com/web/sms/general/v2/send&#39;</span> <span class="token punctuation">\\</span> 
    --data-urlencode <span class="token string">&#39;key=6eeb28e7bbd64b389da2be3a2778c7e3&#39;</span> <span class="token punctuation">\\</span>
    --data-urlencode <span class="token string">&#39;captchaType=6&#39;</span> <span class="token punctuation">\\</span>
    --data-urlencode <span class="token string">&#39;type=1&#39;</span> <span class="token punctuation">\\</span>
    --data-urlencode <span class="token string">&#39;cid=1&#39;</span> <span class="token punctuation">\\</span>
    --data-urlencode <span class="token string">&#39;tel=13888888888&#39;</span> <span class="token punctuation">\\</span>
    --data-urlencode <span class="token string">&#39;challenge=c52148f88a28b6011db52bb213483ee8&#39;</span> <span class="token punctuation">\\</span>
    --data-urlencode <span class="token string">&#39;validate=a98841cd6ea58e1b1f5783fca73cddb6&#39;</span> <span class="token punctuation">\\</span>
    --data-urlencode <span class="token string">&#39;seccode=a98841cd6ea58e1b1f5783fca73cddb6|jordan&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details><summary>查看示例</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;验证码短信已下发&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="提交注册请求" tabindex="-1"><a class="header-anchor" href="#提交注册请求" aria-hidden="true">#</a> 提交注册请求</h2><blockquote><p>https://passport.bilibili.com/web/reg/tel</p></blockquote><p><em>请求方式：POST</em></p><p><strong>正文参数（ application/x-www-form-urlencoded ）：</strong></p>`,7),v=n("thead",null,[n("tr",null,[n("th",null,"参数名"),n("th",null,"类型"),n("th",null,"内容"),n("th",null,"必要性"),n("th",null,"备注")])],-1),k=n("td",null,"cid",-1),g=n("td",null,"num",-1),_=n("td",null,"国际冠字码",-1),q=n("td",null,"必要",-1),E=n("tr",null,[n("td",null,"tel"),n("td",null,"num"),n("td",null,"手机号码"),n("td",null,"必要"),n("td")],-1),f=n("tr",null,[n("td",null,"code"),n("td",null,"num"),n("td",null,"短信验证码"),n("td",null,"必要"),n("td")],-1),w=n("tr",null,[n("td",null,"nickName"),n("td",null,"str"),n("td",null,"昵称"),n("td",null,"必要"),n("td")],-1),y=n("tr",null,[n("td",null,"pwd"),n("td",null,"str"),n("td",null,"密码"),n("td",null,"必要"),n("td",null,"密码为明文")],-1),A=n("tr",null,[n("td",null,"plat"),n("td",null,"num"),n("td",null,"0"),n("td",null,"必要"),n("td",null,"平台？")],-1),x=n("tr",null,[n("td",null,"gourl"),n("td",null,"str"),n("td",null,"注册成功跳转地址"),n("td",null,"非必要"),n("td",null,[s("默认为主页"),n("code",null,"https://www.bilibili.com/")])],-1),B=l(`<p><strong>json回复：</strong></p><p>根对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>返回值</td><td>0：成功<br>1005：验证码错误<br>1007：验证码过期</td></tr><tr><td>message</td><td>str</td><td>错误信息</td><td>成功时无此字段</td></tr><tr><td>data</td><td>obj</td><td>信息本体</td><td>只在成功时存在</td></tr></tbody></table><p><code>data</code>对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>redirectUrl</td><td>str</td><td>跳转链接</td><td></td></tr><tr><td>hint</td><td>str</td><td>&quot;注册成功&quot;</td><td>成功后不提示成功还能提示什么?</td></tr><tr><td>in_reg_audit</td><td>num</td><td>(?)</td><td></td></tr></tbody></table><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token string">&#39;https://passport.bilibili.com/web/reg/tel&#39;</span> <span class="token punctuation">\\</span>
    --data-urlencode <span class="token string">&#39;plat=0&#39;</span> <span class="token punctuation">\\</span>
    --data-urlencode <span class="token string">&#39;cid=1&#39;</span> <span class="token punctuation">\\</span>
    --data-urlencode <span class="token string">&#39;tel=13888888888&#39;</span> <span class="token punctuation">\\</span>
    --data-urlencode <span class="token string">&#39;code=121314&#39;</span> <span class="token punctuation">\\</span>
    --data-urlencode <span class="token string">&#39;nickName=萌系小妹纸わ&#39;</span>
    --data-urlencode <span class="token string">&#39;pwd=Password1234&#39;</span> <span class="token punctuation">\\</span>
    --data-urlencode <span class="token string">&#39;gourl=https://www.bilibili.com&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details><summary>查看示例</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;redirectUrl&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://www.bilibili.com&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;hint&quot;</span><span class="token operator">:</span> <span class="token string">&quot;注册成功&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;in_reg_audit&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,7);function F(j,C){const t=o("RouterLink");return i(),c("div",null,[r,p,n("p",null,[a(t,{to:"/docs/login/login_action/#%E9%AA%8C%E8%AF%81%E7%99%BB%E5%BD%95"},{default:e(()=>[s("完成人机验证(参考验证登录)")]),_:1})]),b,h,n("p",null,[a(t,{to:"/docs/login/login_action/SMS.html#%E5%8F%91%E9%80%81%E7%9F%AD%E4%BF%A1%E9%AA%8C%E8%AF%81%E7%A0%81%EF%BC%88web%E7%AB%AF%EF%BC%89"},{default:e(()=>[s("发送短信验证码(参考短信登录)")]),_:1})]),m,n("table",null,[v,n("tbody",null,[n("tr",null,[k,g,_,q,n("td",null,[s("可以从 "),a(t,{to:"/docs/login/login_action/SMS.html#%E8%8E%B7%E5%8F%96%E5%9B%BD%E9%99%85%E5%86%A0%E5%AD%97%E7%A0%81_web%E7%AB%AF"},{default:e(()=>[s("获取国际冠字码")]),_:1}),s(" 接口中获取")])]),E,f,w,y,A,x])]),B])}const S=d(u,[["render",F],["__file","register.html.vue"]]);export{S as default};
