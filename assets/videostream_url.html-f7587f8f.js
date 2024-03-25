import{_ as t}from"./download-d77df227.js";import{_ as s,o as n,c as a,e as d}from"./app-6aea71e0.js";const e={},p=d('<h1 id="视频流url" tabindex="-1"><a class="header-anchor" href="#视频流url" aria-hidden="true">#</a> 视频流URL</h1><img src="'+t+`" width="100" height="100"><p>B站的番剧视频为http流媒体，需要对应的api以视频id获取取流url，并进行取流</p><h2 id="qn视频清晰度标识" tabindex="-1"><a class="header-anchor" href="#qn视频清晰度标识" aria-hidden="true">#</a> qn视频清晰度标识</h2><p><strong>注：该值在dash模式且非下载模式时无效</strong></p><table><thead><tr><th>值</th><th>含义</th><th>备注</th></tr></thead><tbody><tr><td>6</td><td>240P 极速</td><td>仅mp4方式支持</td></tr><tr><td>16</td><td>360P 流畅</td><td></td></tr><tr><td>32</td><td>480P 清晰</td><td></td></tr><tr><td>64</td><td>720P 高清</td><td>web端默认值<br>B站前端需要登录才能选择，但是直接发送请求可以不登录就拿到720P的取流地址<br><strong>无720P时则为720P60</strong></td></tr><tr><td>74</td><td>720P60 高帧率</td><td>需要认证登录账号</td></tr><tr><td>80</td><td>1080P 高清</td><td>TV端与APP端默认值<br>需要认证登录账号</td></tr><tr><td>112</td><td>1080P+ 高码率</td><td>大多情况需求认证大会员账号</td></tr><tr><td>116</td><td>1080P60 高帧率</td><td>大多情况需求认证大会员账号</td></tr><tr><td>120</td><td>4K 超清</td><td>需要<code>fnval&amp;128=128</code>且<code>fourk=1</code><br>大多情况需求认证大会员账号</td></tr><tr><td>125</td><td>HDR 真彩色</td><td>仅支持dash方式<br>需要<code>fnval&amp;64=64</code><br>大多情况需求认证大会员账号</td></tr><tr><td>126</td><td>杜比视界</td><td>仅支持dash方式<br>需要<code>fnval&amp;512=512</code><br>大多情况需求认证大会员账号</td></tr><tr><td>127</td><td>8K 超高清</td><td>仅支持dash方式<br>需要<code>fnval&amp;1024=1024</code><br>大多情况需求认证大会员账号</td></tr></tbody></table><p>例如：请求1080P+的视频，则<code>qn=112</code></p><h2 id="fnver视频流版本标识" tabindex="-1"><a class="header-anchor" href="#fnver视频流版本标识" aria-hidden="true">#</a> fnver视频流版本标识</h2><p>目前该值恒为0，即<code>fnver=0</code></p><h2 id="fnval视频流格式标识" tabindex="-1"><a class="header-anchor" href="#fnval视频流格式标识" aria-hidden="true">#</a> fnval视频流格式标识</h2><p>该代码为二进制属性位，如需组合功能需要使用<code>OR</code>运算结合一下数值</p><table><thead><tr><th>值</th><th>含义</th><th>备注</th></tr></thead><tbody><tr><td>0</td><td>flv格式</td><td>仅H.264编码<br>部分老视频存在分段现象<br>与mp4格式及dash格式互斥</td></tr><tr><td>1</td><td>mp4格式</td><td>仅H.264编码<br>不存在视频分段<br>与flv格式及dash格式互斥</td></tr><tr><td>16</td><td>dash格式</td><td>H.264编码或H.265编码<br>部分老视频的清晰度上限低于flv格式<br>与mp4格式及flv格式互斥</td></tr><tr><td>64</td><td>是否需求 HDR 视频</td><td>必须为dash格式<br>需要<code>qn=125</code><br>大多情况需求认证大会员账号</td></tr><tr><td>128</td><td>是否需求 4K 分辨率</td><td>该值与<code>fourk</code>字段协同作用<br>需要<code>qn=120</code><br>大多情况需求认证大会员账号</td></tr><tr><td>256</td><td>是否需求杜比音频</td><td>必须为dash格式<br>大多情况需求认证大会员账号</td></tr><tr><td>512</td><td>是否需求杜比视界</td><td>必须为dash格式<br>大多情况需求认证大会员账号</td></tr><tr><td>1024</td><td>是否需求 8K 分辨率</td><td>必须为dash格式<br>需要<code>qn=127</code><br>大多情况需求认证大会员账号</td></tr><tr><td>2048</td><td>是否需求 av1 编码</td><td>必须为dash格式</td></tr></tbody></table><p>例如：请求dash格式且需要HDR的视频流，则<code>fnval=16|64=80</code></p><h2 id="视频编码代码" tabindex="-1"><a class="header-anchor" href="#视频编码代码" aria-hidden="true">#</a> 视频编码代码</h2><table><thead><tr><th>值</th><th>含义</th><th>备注</th></tr></thead><tbody><tr><td>7</td><td>AVC编码</td><td>8K视频无此格式</td></tr><tr><td>12</td><td>HEVC编码</td><td></td></tr><tr><td>13</td><td>AV1编码</td><td></td></tr></tbody></table><h2 id="视频伴音音质代码" tabindex="-1"><a class="header-anchor" href="#视频伴音音质代码" aria-hidden="true">#</a> 视频伴音音质代码</h2><table><thead><tr><th>值</th><th>含义</th></tr></thead><tbody><tr><td>30216</td><td>64K</td></tr><tr><td>30232</td><td>132K</td></tr><tr><td>30280</td><td>192K</td></tr></tbody></table><h2 id="获取番剧视频流url" tabindex="-1"><a class="header-anchor" href="#获取番剧视频流url" aria-hidden="true">#</a> 获取番剧视频流URL</h2><blockquote><p>https://api.bilibili.com/pgc/player/web/playurl</p></blockquote><p><em>请求方式：GET</em></p><p>认证方式：Cookie（SESSDATA）</p><hr><p>关于视频流会员鉴权：</p><ul><li><p>获取480P及以上清晰度视频时需要登录（Cookie）</p></li><li><p>获取高帧率（1080P60）/高码率（1080P+）视频时需要有大会员的账号登录（Cookie）</p></li><li><p>获取会员专属番剧视频时需要登录（Cookie）</p></li></ul><hr><p>获取的url有效时间为120min，超时失效需要重新获取</p><p><strong>部分视频</strong>会有<strong>分段</strong>，需要特别注意</p><p>若视频有分P，仅为单P的视频的url，换P则需更换cid重新获取</p><p>需要设置Referer为<code>https://www.bilibili.com</code>，否则无法获取1080清晰度以上的流信息。</p><p><strong>url参数：</strong></p><table><thead><tr><th>参数名</th><th>类型</th><th>内容</th><th>必要性</th><th>备注</th></tr></thead><tbody><tr><td>avid</td><td>num</td><td>稿件avid</td><td>非必要</td><td></td></tr><tr><td>bvid</td><td>str</td><td>稿件bvid</td><td>非必要</td><td></td></tr><tr><td>ep_id</td><td>num</td><td>稿件epid</td><td>必要（可选）</td><td>ep_id与cid任选一个</td></tr><tr><td>cid</td><td>num</td><td>视频cid</td><td>必要（可选）</td><td>ep_id与cid任选一个</td></tr><tr><td>qn</td><td>num</td><td>视频清晰度选择</td><td>非必要</td><td>未登录默认32（480P）<br>登录默认64（720P）<br><strong>值含义见上表</strong><br>注：dash方式无效</td></tr><tr><td>fnval</td><td>num</td><td>视频获取方式选择</td><td>非必要</td><td>默认为0<br>0 2：flv方式（可能会有分段）<br>1：低清mp4方式（仅240P与360P，且限速65K/s）<br>16 80：dash方式（音视频分流，支持H.265）</td></tr><tr><td>fnver</td><td>num</td><td>0</td><td>非必要</td><td>固定为0</td></tr><tr><td>fourk</td><td>num</td><td>是否允许4K视频</td><td>非必要</td><td>默认为0<br>画质最高1080P：0<br>画质最高4K：1</td></tr><tr><td>session</td><td>str</td><td></td><td>非必要</td><td>从视频播放页的网页源码中获取</td></tr><tr><td>from_client</td><td>str</td><td>BROWSER</td><td>非必要</td><td></td></tr><tr><td>drm_tech_type</td><td>num</td><td>2</td><td>非必要</td><td></td></tr></tbody></table><p><strong>json回复：</strong></p><p>根对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>返回值</td><td>0：成功 <br>-400：请求错误<br>-404：无视频</td></tr><tr><td>message</td><td>str</td><td>错误信息</td><td>成功为success</td></tr><tr><td>result</td><td>有效时：obj<br>无效时：null</td><td>数据本体</td><td></td></tr></tbody></table><p><code>result</code>对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>0</td><td>作用尚不明确</td></tr><tr><td>is_preview</td><td>num</td><td>0</td><td>作用尚不明确</td></tr><tr><td>fnver</td><td>num</td><td>请求时提供的fnver</td><td></td></tr><tr><td>fnval</td><td>num</td><td>请求时提供的fnval</td><td></td></tr><tr><td>video_project</td><td>bool</td><td>true</td><td></td></tr><tr><td>type</td><td>str</td><td>视频流类型（DASH、FLV、MP4）</td><td>DASH</td></tr><tr><td>bp</td><td>num</td><td>是否可以承包</td><td>0</td></tr><tr><td>vip_type</td><td>num</td><td>当前用户大会员类型</td><td></td></tr><tr><td>vip_status</td><td>num</td><td>当前用户大会员状态</td><td></td></tr><tr><td>is_drm</td><td>bool</td><td>false</td><td></td></tr><tr><td>no_rexcode</td><td>num</td><td>0</td><td></td></tr><tr><td>has_paid</td><td>bool</td><td>false</td><td></td></tr><tr><td>status</td><td>num</td><td>2</td><td></td></tr><tr><td>from</td><td>str</td><td>local</td><td>作用尚不明确</td></tr><tr><td>result</td><td>str</td><td>suee</td><td>作用尚不明确</td></tr><tr><td>message</td><td>str</td><td>空</td><td>作用尚不明确</td></tr><tr><td>quality</td><td>num</td><td>当前的视频分辨率代码</td><td><strong>值含义见上表</strong></td></tr><tr><td>format</td><td>str</td><td>视频格式</td><td></td></tr><tr><td>timelength</td><td>num</td><td>视频长度</td><td>单位为毫秒<br>不同分辨率/格式可能有略微差异</td></tr><tr><td>accept_format</td><td>str</td><td>视频支持的全部格式</td><td>每项用<code>,</code>分隔</td></tr><tr><td>accept_description</td><td>array</td><td>视频支持的分辨率列表</td><td></td></tr><tr><td>accept_quality</td><td>array</td><td>视频支持的分辨率代码列表</td><td><strong>值含义见上表</strong></td></tr><tr><td>video_codecid</td><td>num</td><td>默认选择视频流的编码id</td><td>见<strong>视频编码代码</strong></td></tr><tr><td>seek_param</td><td>str</td><td>固定值：start</td><td>作用尚不明确</td></tr><tr><td>seek_type</td><td>str</td><td>offset（dash、flv）<br> second（mp4）</td><td>作用尚不明确</td></tr><tr><td>durl</td><td>array</td><td>视频分段</td><td><strong>注：仅flv/mp4存在此项</strong></td></tr><tr><td>dash</td><td>obj</td><td>dash音视频流信息</td><td><strong>注：仅dash存在此项</strong></td></tr><tr><td>support_formats</td><td>array</td><td>支持格式的详细信息</td><td></td></tr><tr><td>clip_info_list</td><td>array</td><td></td><td>空，待补充</td></tr><tr><td>record_info</td><td>obj</td><td>备案登记信息</td><td></td></tr></tbody></table><p><code>result</code>中的<code>accept_description</code>数组：</p><table><thead><tr><th>项</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>0</td><td>str</td><td>分辨率名称1</td><td></td></tr><tr><td>n</td><td>str</td><td>分辨率名称(n+1)</td><td></td></tr><tr><td>……</td><td>str</td><td>……</td><td></td></tr></tbody></table><p><code>result</code>中的<code>accept_quality</code>数组：</p><table><thead><tr><th>项</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>0</td><td>str</td><td>分辨率代码1</td><td></td></tr><tr><td>n</td><td>str</td><td>分辨率代码(n+1)</td><td></td></tr><tr><td>……</td><td>str</td><td>……</td><td></td></tr></tbody></table><p><code>result</code>中的<code>support_formats</code>数组：</p><table><thead><tr><th>项</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>0</td><td>obj</td><td>播放格式详细信息1</td><td></td></tr><tr><td>n</td><td>obj</td><td>播放格式详细信息(n+1)</td><td></td></tr><tr><td>……</td><td>obj</td><td>……</td><td></td></tr></tbody></table><p><code>support_formats</code>数组中的对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>quality</td><td>num</td><td>视频清晰度代码</td><td></td></tr><tr><td>format</td><td>str</td><td>视频格式</td><td></td></tr><tr><td>new_description</td><td>str</td><td>格式描述</td><td></td></tr><tr><td>description</td><td>str</td><td>格式描述</td><td></td></tr><tr><td>display_desc</td><td>str</td><td>格式描述</td><td></td></tr><tr><td>superscript</td><td>str</td><td>(?)</td><td></td></tr><tr><td>codecs</td><td>array</td><td>编码格式列表</td><td></td></tr><tr><td>need_login</td><td>bool</td><td>需要登录</td><td></td></tr><tr><td>need_vip</td><td>bool</td><td>需要大会员</td><td></td></tr></tbody></table><p><code>support_formats</code>中的<code>codecs</code>数组：</p><table><thead><tr><th>项</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>0</td><td>str</td><td>编码格式</td><td>如：avc1.640032，意为AVC编码</td></tr><tr><td>1</td><td>str</td><td>编码格式</td><td>如：hev1.1.6.L153.90，意为HEVC编码</td></tr></tbody></table><p><code>result</code>中的<code>record_info</code>对象：</p><table><thead><tr><th>项</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>record_icon</td><td>str</td><td>空串</td><td></td></tr><tr><td>record</td><td>str</td><td>显示文案</td><td>登记号：10417060172092207</td></tr></tbody></table><hr><p><strong>flv/mp4方式：</strong></p><p><code>result</code>中的<code>durl</code>数组：</p><table><thead><tr><th>项</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>0</td><td>obj</td><td>视频分段1信息</td><td><strong>注：仅flv方式具有分段</strong></td></tr><tr><td>n</td><td>obj</td><td>视频分段(n+1)信息</td><td></td></tr><tr><td>……</td><td>obj</td><td>……</td><td></td></tr></tbody></table><p><code>durl</code>数组中的对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>order</td><td>num</td><td>视频分段序号</td><td>某些视频会分为多个片段（从1顺序增长）</td></tr><tr><td>length</td><td>num</td><td>视频长度</td><td>单位为毫秒</td></tr><tr><td>size</td><td>num</td><td>视频大小</td><td>单位为Byte</td></tr><tr><td>vhead</td><td>str</td><td>空</td><td>作用尚不明确</td></tr><tr><td>url</td><td>str</td><td>视频流url</td><td><strong>注：url内容存在转义符</strong><br>有效时间为120min</td></tr><tr><td>backup_url</td><td>array</td><td>备用视频流</td><td></td></tr></tbody></table><p><code>durl</code>数组中的对象中的<code>backup_url</code>数组：</p><table><thead><tr><th>项</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>0</td><td>str</td><td>备用视频流url 1</td><td><strong>注：url内容存在转义符</strong><br>有效时间为120min</td></tr><tr><td>n</td><td>str</td><td>备用视频流url (n+1)</td><td></td></tr><tr><td>……</td><td>str</td><td>……</td><td></td></tr></tbody></table><p><strong>示例：</strong></p><p><strong>视频无分段时：</strong></p><p>获取视频<code>ep85046</code>/<code>av2325306</code>中的1P（cid=<code>3629601</code>）的视频流url，清晰度为480p，使用flv方式获取</p><p>avid/epid方式：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-G</span> <span class="token string">&#39;https://api.bilibili.com/pgc/player/web/playurl&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;avid=2325306&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;cid=3629601&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;ep_id=85046&#39;</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-b</span> <span class="token string">&#39;SESSDATA=xxx&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>https://api.bilibili.com/pgc/player/web/playurl?avid=2325306&amp;cid=3629601&amp;ep_id=85046</p><details><summary>查看响应示例：</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> 
    <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;success&quot;</span><span class="token punctuation">,</span> 
    <span class="token property">&quot;result&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;accept_format&quot;</span><span class="token operator">:</span> <span class="token string">&quot;flv480,mp4&quot;</span><span class="token punctuation">,</span> 
        <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> 
        <span class="token property">&quot;seek_param&quot;</span><span class="token operator">:</span> <span class="token string">&quot;start&quot;</span><span class="token punctuation">,</span> 
        <span class="token property">&quot;is_preview&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> 
        <span class="token property">&quot;fnval&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> 
        <span class="token property">&quot;video_project&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> 
        <span class="token property">&quot;fnver&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> 
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;FLV&quot;</span><span class="token punctuation">,</span> 
        <span class="token property">&quot;bp&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> 
        <span class="token property">&quot;result&quot;</span><span class="token operator">:</span> <span class="token string">&quot;suee&quot;</span><span class="token punctuation">,</span> 
        <span class="token property">&quot;seek_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;offset&quot;</span><span class="token punctuation">,</span> 
        <span class="token property">&quot;from&quot;</span><span class="token operator">:</span> <span class="token string">&quot;local&quot;</span><span class="token punctuation">,</span> 
        <span class="token property">&quot;video_codecid&quot;</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span> 
        <span class="token property">&quot;record_info&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;record_icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> 
            <span class="token property">&quot;record&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> 
        <span class="token property">&quot;durl&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token number">111138876</span><span class="token punctuation">,</span> 
                <span class="token property">&quot;ahead&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> 
                <span class="token property">&quot;length&quot;</span><span class="token operator">:</span> <span class="token number">1394090</span><span class="token punctuation">,</span> 
                <span class="token property">&quot;vhead&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> 
                <span class="token property">&quot;backup_url&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                    <span class="token string">&quot;https://upos-sz-mirrorcoso1.bilivideo.com/upgcxcode/01/96/3629601/3629601_da8-1-32.flv?e=ig8euxZM2rNcNbRVhwdVhwdlhWdVhwdVhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&amp;uipk=5&amp;nbs=1&amp;deadline=1656098195&amp;gen=playurlv2&amp;os=coso1bv&amp;oi=2946990771&amp;trid=a1db84b216ea45dd89225f02a09093fdp&amp;mid=0&amp;platform=pc&amp;upsig=878be08cc0e6bdea705952529e7e6785&amp;uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&amp;bvc=vod&amp;nettype=0&amp;orderid=1,3&amp;agrr=1&amp;bw=79726&amp;logo=40000000&quot;</span><span class="token punctuation">,</span> 
                    <span class="token string">&quot;https://upos-sz-mirrorcos.bilivideo.com/upgcxcode/01/96/3629601/3629601_da8-1-32.flv?e=ig8euxZM2rNcNbRVhwdVhwdlhWdVhwdVhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&amp;uipk=5&amp;nbs=1&amp;deadline=1656098195&amp;gen=playurlv2&amp;os=cosbv&amp;oi=2946990771&amp;trid=a1db84b216ea45dd89225f02a09093fdp&amp;mid=0&amp;platform=pc&amp;upsig=8c31064c84d8e981704815992cfe315c&amp;uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&amp;bvc=vod&amp;nettype=0&amp;orderid=2,3&amp;agrr=1&amp;bw=79726&amp;logo=40000000&quot;</span>
                <span class="token punctuation">]</span><span class="token punctuation">,</span> 
                <span class="token property">&quot;url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://cn-lnsy-cu-v-02.bilivideo.com/upgcxcode/01/96/3629601/3629601_da8-1-32.flv?e=ig8euxZM2rNcNbRVhwdVhwdlhWdVhwdVhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&amp;uipk=5&amp;nbs=1&amp;deadline=1656098195&amp;gen=playurlv2&amp;os=bcache&amp;oi=2946990771&amp;trid=0000a1db84b216ea45dd89225f02a09093fdp&amp;mid=0&amp;platform=pc&amp;upsig=7a5c4f25b9056359127191390a73bedc&amp;uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&amp;cdnid=3281&amp;bvc=vod&amp;nettype=0&amp;orderid=0,3&amp;agrr=1&amp;bw=79726&amp;logo=80000000&quot;</span><span class="token punctuation">,</span> 
                <span class="token property">&quot;order&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> 
                <span class="token property">&quot;md5&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span> 
        <span class="token property">&quot;no_rexcode&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> 
        <span class="token property">&quot;format&quot;</span><span class="token operator">:</span> <span class="token string">&quot;flv480&quot;</span><span class="token punctuation">,</span> 
        <span class="token property">&quot;support_formats&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token property">&quot;display_desc&quot;</span><span class="token operator">:</span> <span class="token string">&quot;480P&quot;</span><span class="token punctuation">,</span> 
                <span class="token property">&quot;superscript&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> 
                <span class="token property">&quot;codecs&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token punctuation">]</span><span class="token punctuation">,</span> 
                <span class="token property">&quot;format&quot;</span><span class="token operator">:</span> <span class="token string">&quot;flv480&quot;</span><span class="token punctuation">,</span> 
                <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;清晰 480P&quot;</span><span class="token punctuation">,</span> 
                <span class="token property">&quot;quality&quot;</span><span class="token operator">:</span> <span class="token number">32</span><span class="token punctuation">,</span> 
                <span class="token property">&quot;new_description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;480P 清晰&quot;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> 
            <span class="token punctuation">{</span>
                <span class="token property">&quot;display_desc&quot;</span><span class="token operator">:</span> <span class="token string">&quot;360P&quot;</span><span class="token punctuation">,</span> 
                <span class="token property">&quot;superscript&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> 
                <span class="token property">&quot;codecs&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token punctuation">]</span><span class="token punctuation">,</span> 
                <span class="token property">&quot;format&quot;</span><span class="token operator">:</span> <span class="token string">&quot;mp4&quot;</span><span class="token punctuation">,</span> 
                <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;流畅 360P&quot;</span><span class="token punctuation">,</span> 
                <span class="token property">&quot;quality&quot;</span><span class="token operator">:</span> <span class="token number">16</span><span class="token punctuation">,</span> 
                <span class="token property">&quot;new_description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;360P 流畅&quot;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span> 
        <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> 
        <span class="token property">&quot;accept_quality&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token number">32</span><span class="token punctuation">,</span> 
            <span class="token number">16</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span> 
        <span class="token property">&quot;quality&quot;</span><span class="token operator">:</span> <span class="token number">32</span><span class="token punctuation">,</span> 
        <span class="token property">&quot;timelength&quot;</span><span class="token operator">:</span> <span class="token number">1394090</span><span class="token punctuation">,</span> 
        <span class="token property">&quot;has_paid&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> 
        <span class="token property">&quot;clip_info_list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token punctuation">]</span><span class="token punctuation">,</span> 
        <span class="token property">&quot;accept_description&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;清晰 480P&quot;</span><span class="token punctuation">,</span> 
            <span class="token string">&quot;流畅 360P&quot;</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span> 
        <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token number">2</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="视频的取流-web端及app端" tabindex="-1"><a class="header-anchor" href="#视频的取流-web端及app端" aria-hidden="true">#</a> 视频的取流（web端及APP端）</h2><p><strong>注意：</strong></p><ol><li>如flv模式则可能产生分段情况，将<code>$.data.durl[1-n].url</code>或<code>$.data.durl[1-n].backup_url[0]</code>中的内容作为url进行GET操作, 如果有多个视频, 需要手动合并处理</li><li>如mp4模式则需要获取对应的视频流（方法同上）</li><li>如dash模式则需要同时获取对应的视频流和伴音流（方法同上）</li><li>web端取流需要验证防盗链，即<code>referer</code>为 <code>.bilibili.com</code>域名下且UA不能为空；app端也需要验证防盗链，即UA需要含有<code>Mozilla/5.0 BiliDroid/*.*.* (bbcallen@gmail.com)</code>（*为版本）；如<code>referer</code>或UA错误的情况会被判定为盗链，返回403 Forbidden故无法取流</li><li><strong>注意unicode转义符</strong></li></ol><p>以上述视频流url为例：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">wget</span> <span class="token string">&#39;https://upos-sz-mirrorhwo1.bilivideo.com/upgcxcode/01/96/3629601/3629601_da8-1-32.flv?e=ig8euxZM2rNcNbRVhwdVhwdlhWdVhwdVhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&amp;uipk=5&amp;nbs=1&amp;deadline=1656098026&amp;gen=playurlv2&amp;os=hwo1bv&amp;oi=0&amp;trid=f0a1d2d854264369803462f3dd524154p&amp;mid=0&amp;platform=pc&amp;upsig=76c1438153942fda51fbf4eb07e6e5a1&amp;uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&amp;bvc=vod&amp;nettype=0&amp;orderid=0,2&amp;agrr=1&amp;bw=79726&amp;logo=80000000&#39;</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">--referer</span> <span class="token string">&#39;https://www.bilibili.com&#39;</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-O</span> <span class="token string">&#39;Download_video.flv&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>响应正文将返回一个flv文件</p>`,69),o=[p];function r(l,c){return n(),a("div",null,o)}const m=s(e,[["render",r],["__file","videostream_url.html.vue"]]);export{m as default};
