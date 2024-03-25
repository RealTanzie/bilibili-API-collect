import{_ as t,o as n,c as s,e as a}from"./app-6aea71e0.js";const d={},e=a(`<h1 id="视频观看数据上报" tabindex="-1"><a class="header-anchor" href="#视频观看数据上报" aria-hidden="true">#</a> 视频观看数据上报</h1><h2 id="上报观看进度-双端" tabindex="-1"><a class="header-anchor" href="#上报观看进度-双端" aria-hidden="true">#</a> 上报观看进度（双端）</h2><blockquote><p>https://api.bilibili.com/x/v2/history/report</p></blockquote><p><em>请求方式：POST</em></p><p>认证方式：APP或Cookie（SESSDATA）</p><p><strong>正文参数（ application/x-www-form-urlencoded ）：</strong></p><table><thead><tr><th>参数名</th><th>类型</th><th>内容</th><th>必要性</th><th>备注</th></tr></thead><tbody><tr><td>access_key</td><td>str</td><td>APP登录Token</td><td>APP方式必要</td><td></td></tr><tr><td>aid</td><td>num</td><td>稿件avid</td><td>必要</td><td></td></tr><tr><td>cid</td><td>num</td><td>视频cid</td><td>必要</td><td>用于识别分P</td></tr><tr><td>progress</td><td>num</td><td>观看进度</td><td>非必要</td><td>单位为秒<br>默认为0</td></tr><tr><td>platform</td><td>str</td><td>平台标识</td><td>非必要</td><td>可为android</td></tr><tr><td>csrf</td><td>str</td><td>CSRF Token（位于cookie）</td><td>Cookie方式必要</td><td></td></tr></tbody></table><p><strong>json回复：</strong></p><p>根对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>返回值</td><td>0：成功 <br>-101：账号未登录<br>-111：csrf校验失败<br>-400：请求错误</td></tr><tr><td>message</td><td>str</td><td>错误信息</td><td>默认为0</td></tr><tr><td>ttl</td><td>num</td><td>1</td><td></td></tr></tbody></table><p><strong>示例：</strong></p><p>记录视频<code>av13662970</code>（<code>cid=126654047</code>）的观看记录位于<code>1248</code>秒</p><p>Cookie方式：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token string">&#39;https://api.bilibili.com/x/v2/history/report&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;aid=13662970&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;cid=126654047&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;progress=1248&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;platform=android&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;csrf=xxx&#39;</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-b</span> <span class="token string">&#39;SESSDATA=xxx&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>APP方式：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token string">&#39;https://api.bilibili.com/x/v2/history/report&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;access_key=xxx&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;aid=13662970&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;cid=126654047&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;progress=1248&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;platform=android&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details><summary>查看响应示例：</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;ttl&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="上报视频播放心跳-web端" tabindex="-1"><a class="header-anchor" href="#上报视频播放心跳-web端" aria-hidden="true">#</a> 上报视频播放心跳（web端）</h2><blockquote><p>https://api.bilibili.com/x/click-interface/web/heartbeat</p></blockquote><p><em>请求方式：POST</em></p><p>认证方式：仅可Cookie（SESSDATA）</p><p>默认间隔15秒一次</p><p>亦可记录播放历史</p><p><strong>正文参数（ application/x-www-form-urlencoded ）：</strong></p><table><thead><tr><th>参数名</th><th>类型</th><th>内容</th><th>必要性</th><th>备注</th></tr></thead><tbody><tr><td>aid</td><td>num</td><td>稿件avid</td><td>必要（可选）</td><td>avid与bvid任选一个</td></tr><tr><td>bvid</td><td>str</td><td>稿件bvid</td><td>必要（可选）</td><td>avid与bvid任选一个</td></tr><tr><td>cid</td><td>num</td><td>视频cid</td><td>非必要</td><td>用于识别分P</td></tr><tr><td>epid</td><td>num</td><td>番剧epid</td><td>非必要</td><td></td></tr><tr><td>sid</td><td>num</td><td>番剧ssid</td><td>非必要</td><td></td></tr><tr><td>mid</td><td>num</td><td>当前用户mid</td><td>非必要</td><td></td></tr><tr><td>played_time</td><td>num</td><td>视频播放进度</td><td>非必要</td><td>单位为秒<br>默认为0</td></tr><tr><td>realtime</td><td>num</td><td>总计播放时间</td><td>非必要</td><td>单位为秒</td></tr><tr><td>start_ts</td><td>num</td><td>开始播放时刻</td><td>非必要</td><td>时间戳</td></tr><tr><td>type</td><td>num</td><td>视频类型</td><td>非必要</td><td>3：投稿视频<br>4：剧集<br>10：课程</td></tr><tr><td>sub_type</td><td>num</td><td>剧集副类型</td><td>非必要</td><td>当<code>type=4</code>时本参数有效<br>1：番剧<br>2：电影<br>3：纪录片<br>4：国创<br>5：电视剧<br>7：综艺</td></tr><tr><td>dt</td><td>num</td><td>2</td><td>非必要</td><td></td></tr><tr><td>play_type</td><td>num</td><td>播放动作</td><td>非必要</td><td>0：播放中<br>1：开始播放<br>2：暂停<br>3：继续播放</td></tr><tr><td>csrf</td><td>str</td><td>CSRF Token（位于cookie）</td><td>非必要</td><td></td></tr></tbody></table><p><strong>json回复：</strong></p><p>根对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>返回值</td><td>0：成功<br>-400：请求错误</td></tr><tr><td>message</td><td>str</td><td>错误信息</td><td>默认为0</td></tr><tr><td>ttl</td><td>num</td><td>1</td><td></td></tr></tbody></table><p><strong>示例：</strong></p><p>上报一次视频<code>av2</code>/<code>BV1xx411c7mD</code>的心跳数据</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token string">&#39;https://api.bilibili.com/x/click-interface/web/heartbeat&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;aid=2&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;bvid=BV1xx411c7mD&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;cid=62131&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;played_time=60&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;realtime=60&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;start_ts=1592720840&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;type=3&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;dt=2&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;play_type=0&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;csrf=xxx&#39;</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-b</span> <span class="token string">&#39;SESSDATA=xxx&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details><summary>查看响应示例：</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;ttl&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,32),r=[e];function i(p,o){return n(),s("div",null,r)}const l=t(d,[["render",i],["__file","report.html.vue"]]);export{l as default};
