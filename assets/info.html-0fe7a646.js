import{_ as t,o as s,c as n,e as a}from"./app-6aea71e0.js";const o={},p=a(`<h1 id="相簿基本信息" tabindex="-1"><a class="header-anchor" href="#相簿基本信息" aria-hidden="true">#</a> 相簿基本信息</h1><h2 id="获取相簿详细信息" tabindex="-1"><a class="header-anchor" href="#获取相簿详细信息" aria-hidden="true">#</a> 获取相簿详细信息</h2><blockquote><p>https://api.vc.bilibili.com/link_draw/v1/doc/detail</p></blockquote><p><em>请求方式：GET</em></p><p>认证方式：Cookie（SESSDSTA）</p><p><strong>url参数：</strong></p><table><thead><tr><th>参数名</th><th>类型</th><th>内容</th><th>必要性</th><th>备注</th></tr></thead><tbody><tr><td>doc_id</td><td>num</td><td>目标相簿id</td><td>必要</td><td></td></tr></tbody></table><p><strong>json回复：</strong></p><p>根对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>返回值</td><td>0：成功<br>110001：找不到目标相簿</td></tr><tr><td>msg</td><td>str</td><td>错误信息</td><td>默认为success</td></tr><tr><td>message</td><td>str</td><td>错误信息</td><td>默认为success</td></tr><tr><td>data</td><td>obj</td><td>信息本体</td><td></td></tr></tbody></table><p><code>data</code>对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>user</td><td>obj</td><td>作者信息</td><td></td></tr><tr><td>item</td><td>obj</td><td>相簿信息</td><td></td></tr></tbody></table><p><code>data</code>中的<code>user</code>对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>uid</td><td>num</td><td>作者mid</td><td></td></tr><tr><td>head_url</td><td>str</td><td>头像url</td><td></td></tr><tr><td>name</td><td>str</td><td>昵称</td><td></td></tr><tr><td>vip</td><td>obj</td><td>会员信息</td><td></td></tr><tr><td>upload_count</td><td>str</td><td>相簿投稿数</td><td></td></tr></tbody></table><p><code>user</code>中的<code>vip</code>对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>vipType</td><td>num</td><td>会员类型</td><td>0：无<br>1：月度大会员<br>2：年度及以上大会员</td></tr><tr><td>vipDueDate</td><td>num</td><td>会员到期时间</td><td>毫秒 时间戳</td></tr><tr><td>dueRemark</td><td>str</td><td>空</td><td>作用尚不明确</td></tr><tr><td>accessStatus</td><td>num</td><td>0</td><td>作用尚不明确</td></tr><tr><td>vipStatus</td><td>num</td><td>会员开通状态</td><td>0：无<br>1：有</td></tr><tr><td>vipStatusWarn</td><td>str</td><td>空</td><td>作用尚不明确</td></tr><tr><td>themeType</td><td>num</td><td>0</td><td>作用尚不明确</td></tr><tr><td>label</td><td>obj</td><td>？</td><td>作用尚不明确</td></tr></tbody></table><p><code>vip</code>中的<code>label</code>对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>path</td><td>str</td><td>空</td><td>作用尚不明确</td></tr></tbody></table><p><code>data</code>中的<code>item</code>对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>biz</td><td>num</td><td>相簿分区</td><td>1：画友<br>2：摄影<br>3：日常</td></tr><tr><td>doc_id</td><td>num</td><td>相簿id</td><td></td></tr><tr><td>poster_uid</td><td>num</td><td>作者mid</td><td></td></tr><tr><td>category</td><td>str</td><td>子分区标识</td><td>cos：cosplay<br>daily：日常<br>illustration：插画<br>comic：漫画<br>draw：其他<br>sifu：私服</td></tr><tr><td>type</td><td>num</td><td>相簿类型</td><td>0：原创<br>1：同人</td></tr><tr><td>title</td><td>str</td><td>标题</td><td></td></tr><tr><td>tags</td><td>array</td><td>相簿TAG</td><td></td></tr><tr><td>pictures</td><td>array</td><td>相簿图片</td><td></td></tr><tr><td>source</td><td>null</td><td></td><td>作用尚不明确</td></tr><tr><td>upload_time</td><td>str</td><td>投稿时间（时间码）</td><td>YYYY-MM-DD hh:mm:ss</td></tr><tr><td>upload_timestamp</td><td>num</td><td>投稿时间（时间戳）</td><td></td></tr><tr><td>upload_time_text</td><td>str</td><td>投稿时间（文本）</td><td></td></tr><tr><td>description</td><td>str</td><td>简介</td><td></td></tr><tr><td>role</td><td>null</td><td></td><td>作用尚不明确</td></tr><tr><td>settings</td><td>obj</td><td>权限配置</td><td></td></tr><tr><td>already_collected</td><td>num</td><td>是否已收藏</td><td>需要登录（Cookie）<br>否则恒为0</td></tr><tr><td>already_liked</td><td>num</td><td>0</td><td>作用尚不明确</td></tr><tr><td>user_status</td><td>num</td><td>0</td><td>作用尚不明确</td></tr><tr><td>at_control</td><td>str</td><td>空</td><td>作用尚不明确</td></tr><tr><td>view_count</td><td>num</td><td>观看数</td><td></td></tr><tr><td>like_count</td><td>num</td><td>0</td><td>作用尚不明确</td></tr><tr><td>collect_count</td><td>num</td><td>收藏数</td><td></td></tr><tr><td>verify_status</td><td>num</td><td>1</td><td>作用尚不明确</td></tr><tr><td>already_voted</td><td>num</td><td>是否已点赞</td><td>需要登录（Cookie）<br>否则恒为0</td></tr><tr><td>vote_count</td><td>num</td><td>点赞数</td><td></td></tr><tr><td>comment_count</td><td>num</td><td>评论数</td><td></td></tr></tbody></table><p><code>item</code>中的<code>tags</code>数组：</p><table><thead><tr><th>项</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>0</td><td>obj</td><td>TAG 1</td><td></td></tr><tr><td>n</td><td>obj</td><td>TAG (n+1)</td><td></td></tr><tr><td>……</td><td>obj</td><td>……</td><td>……</td></tr></tbody></table><p><code>item</code>中的<code>tags</code>数组中的对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>tag</td><td>str</td><td>TAG名</td><td></td></tr><tr><td>type</td><td>num</td><td>类型？</td><td></td></tr><tr><td>category</td><td>str</td><td>TAG所属子分区名</td><td></td></tr><tr><td>link</td><td>str</td><td>活动页面url</td><td>是活动TAG有此项</td></tr><tr><td>text</td><td>str</td><td>TAG名</td><td></td></tr><tr><td>name</td><td>str</td><td>TAG名</td><td></td></tr></tbody></table><p><code>item</code>中的<code>pictures</code>数组：</p><table><thead><tr><th>项</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>0</td><td>obj</td><td>图片 1</td><td></td></tr><tr><td>n</td><td>obj</td><td>图片 (n+1)</td><td></td></tr><tr><td>……</td><td>obj</td><td>……</td><td>……</td></tr></tbody></table><p><code>item</code>中的<code>pictures</code>数组中的对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>img_src</td><td>str</td><td>图片url</td><td></td></tr><tr><td>img_width</td><td>num</td><td>图片宽度</td><td></td></tr><tr><td>img_height</td><td>num</td><td>图片高度</td><td></td></tr><tr><td>img_size</td><td>num</td><td>图片大小</td><td>单位为KByte</td></tr></tbody></table><p><code>item</code>中的<code>settings</code>对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>copy_forbidden</td><td>num</td><td>禁止转载标志</td><td>0：不设置转载权限<br>1：开放授权-署名-非商用转载<br>2：作者授权-署名-非商用转载<br>3：禁止转载</td></tr></tbody></table><p><strong>示例：</strong></p><p>查询相簿<code>id=99184721</code>的详细信息</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-G</span> <span class="token string">&#39;https://api.vc.bilibili.com/link_draw/v1/doc/detail&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;doc_id=99184721&#39;</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-b</span> <span class="token string">&#39;SESSDATA=xxx&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details><summary>查看响应示例：</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;msg&quot;</span><span class="token operator">:</span> <span class="token string">&quot;success&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;success&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;user&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;uid&quot;</span><span class="token operator">:</span> <span class="token number">813818</span><span class="token punctuation">,</span>
            <span class="token property">&quot;head_url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://i2.hdslb.com/bfs/face/26b12390399f3e82fb913922938f8a6662d28665.jpg&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;QYS3&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;vip&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;vipType&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
                <span class="token property">&quot;vipDueDate&quot;</span><span class="token operator">:</span> <span class="token number">1613750400000</span><span class="token punctuation">,</span>
                <span class="token property">&quot;dueRemark&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;accessStatus&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token property">&quot;vipStatus&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                <span class="token property">&quot;vipStatusWarn&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;themeType&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token property">&quot;label&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token property">&quot;upload_count&quot;</span><span class="token operator">:</span> <span class="token string">&quot;171&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;item&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;biz&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;doc_id&quot;</span><span class="token operator">:</span> <span class="token number">99184721</span><span class="token punctuation">,</span>
            <span class="token property">&quot;poster_uid&quot;</span><span class="token operator">:</span> <span class="token number">813818</span><span class="token punctuation">,</span>
            <span class="token property">&quot;category&quot;</span><span class="token operator">:</span> <span class="token string">&quot;illustration&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;旅行&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;tags&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;tag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;魔女之旅&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;category&quot;</span><span class="token operator">:</span> <span class="token string">&quot;illustration&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;魔女之旅&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;魔女之旅&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;tag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;伊蕾娜&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;category&quot;</span><span class="token operator">:</span> <span class="token string">&quot;illustration&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;伊蕾娜&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;伊蕾娜&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;tag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;旅行&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;category&quot;</span><span class="token operator">:</span> <span class="token string">&quot;illustration&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;旅行&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;旅行&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;tag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;魔女&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;category&quot;</span><span class="token operator">:</span> <span class="token string">&quot;illustration&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;魔女&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;魔女&quot;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">&quot;pictures&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;img_src&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://i0.hdslb.com/bfs/album/d531e3dae34ef65b44ecdb2914d4cc4f5a4da998.jpg&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;img_width&quot;</span><span class="token operator">:</span> <span class="token number">1236</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;img_height&quot;</span><span class="token operator">:</span> <span class="token number">1600</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;img_size&quot;</span><span class="token operator">:</span> <span class="token number">508</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">&quot;source&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
            <span class="token property">&quot;upload_time&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2020-11-23 23:03:12&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;upload_timestamp&quot;</span><span class="token operator">:</span> <span class="token number">1606143792</span><span class="token punctuation">,</span>
            <span class="token property">&quot;upload_time_text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;3天前&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;伊蕾娜世界第一~！&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;role&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
            <span class="token property">&quot;settings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;copy_forbidden&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token property">&quot;already_collected&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;already_liked&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;user_status&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;at_control&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;view_count&quot;</span><span class="token operator">:</span> <span class="token number">143699</span><span class="token punctuation">,</span>
            <span class="token property">&quot;like_count&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;collect_count&quot;</span><span class="token operator">:</span> <span class="token number">54</span><span class="token punctuation">,</span>
            <span class="token property">&quot;verify_status&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;already_voted&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;vote_count&quot;</span><span class="token operator">:</span> <span class="token number">2258</span><span class="token punctuation">,</span>
            <span class="token property">&quot;comment_count&quot;</span><span class="token operator">:</span> <span class="token number">98</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,34),e=[p];function d(r,c){return s(),n("div",null,e)}const l=t(o,[["render",d],["__file","info.html.vue"]]);export{l as default};