import React, {CSSProperties} from 'react';
import {Expandable, Help, ButtonIndicator} from "./Common";
import {localize} from "./Localization";
import {DebugOptions} from "./DebugOptions";
import changelog from "../changelog.json"

function Changelog() {
	return <div className={"paragraph"}><Expandable title={"Changelog"} defaultShow={false} content={
		<div>
			{
				changelog.map(entry => {
					let changes: JSX.Element[] = [];
					for (let i = 0; i < entry.changes.length; i++) {
						changes.push(<div key={i}>{entry.changes[i]}</div>);
					}
					return <div className={"paragraph"} key={entry.date}>
						{entry.date}<br/>
						{changes}
					</div>
				})
			}
		</div>
	}/></div>
}

export function IntroSection(props: {}) {
	let smallGap: CSSProperties = { marginBottom: 5 };
	return <div>
		<Expandable
			defaultShow={true}
			title={"instructions"}
			titleNode={<span>{localize({en: "Instructions ", zh: "使用说明 ", ja: "使い方"})}
				<Help topic={"expandable"} content={localize({en:"click me to expand or collapse", zh: "点击展开/折叠"})}/></span>}
			content={<div>
				<div className="paragraph">
					<b>{localize({en: "General Usage", zh: "基本用法"})}</b>
				</div>
				{localize({
					en: <ul>
						<li style={smallGap}>Set your stats in <b>Config/Edit</b> on the right, then <ButtonIndicator text={"apply and reset"}/></li>
						<li style={smallGap}>Click on a skill to use it. If it's not ready yet, click on it again will wait and retry.</li>
						<li style={smallGap}>Press <ButtonIndicator text={"u"}/> to delete the last added action (effective when not running in real-time).</li>
						<li style={smallGap}>Click on a buff applied to self to remove it. Unless it's ley lines, in which case it can be re-enabled.</li>
					</ul>,
					zh: <ul>
						<li style={smallGap}>在右边 <b>设置/编辑</b> 里输入装备数据，然后点击 <ButtonIndicator text={"应用并重置时间线"}/></li>
						<li style={smallGap}>单击使用技能，如果CD还没转好，可以再次点击，会自动等到转好然后重试。</li>
						<li style={smallGap}>按 <ButtonIndicator text={"u"}/> 删除时间线上的最后一个操作（实时模式下此操作无效）。</li>
						<li style={smallGap}>左键单击可以移除自己身上的buff。黑魔纹除外，黑魔纹在单击关闭后可以被再次点击开启。</li>
					</ul>
				})}
				<div className="paragraph">
					<b>{localize({en: "Timeline", zh: "时间轴"})}</b>
				</div>
				{localize({
					en: <ul>
						<li style={smallGap}>Holding <ButtonIndicator text={"shift"}/> lets you scroll horizontally</li>
						<li style={smallGap}>Click to select a skill on the timeline. Shift click to select a sequence of skills</li>
						<li style={smallGap}><ButtonIndicator text={"backspace"}/> to delete the selected skill and everything after it</li>
						<li style={smallGap}>Click on the timeline's ruler-like header to view historical game states.
							While doing so, the main control region will have an <b style={{color: "darkorange"}}>orange</b> border
							and you will not be able to use skills. Click on somewhere else on the timeline to cancel.
						</li>
					</ul>,
					zh: <ul>
						<li style={smallGap}>按住 <ButtonIndicator text={"shift"}/> 时滑动鼠标滚轮可以横向滚动时间线。</li>
						<li style={smallGap}>单击选中时间轴上的技能。已经选中一个技能时，按住 <ButtonIndicator text={"shift"}/> 点击另一个技能会选中期间的所有操作。</li>
						<li style={smallGap}>按 <ButtonIndicator text={"backspace"}/> 删除选中技能及其之后的所有操作。</li>
						<li style={smallGap}>选中某技能或者刻度上的某时间时，可以看到相应时间的职业资源状态。此时控制区域边框变为<b style={{color: "darkorange"}}>橙色</b>且无法使用技能。点击控制区域或时间轴空白处取消。
						</li>
					</ul>
				})}

				{localize({
					en: <div className={"paragraph"}><span style={{color: "darkolivegreen", cursor: "pointer"}}><u>[these]</u></span> are file download links. Click to download, or right click to choose save location.</div>,
					zh: <div className={"paragraph"}><span style={{color: "darkolivegreen", cursor: "pointer"}}><u>[这样的按钮]</u></span> 是文件下载链接，可以点击直接下载也可以右键另存为。</div>
				})}

				{localize({
					en: <div className="paragraph">Most edits are automatically saved in your browser cache, so it's generally okay to refresh the page and not worry about losing progress.</div>,
					zh: <div className="paragraph">大部分编辑都会被保存在浏览器缓存，所以除非特别叮嘱，否则一般不用太担心刷新丢失编辑进度。</div>
				})}

				{localize({
					en: <div className="paragraph">Hover over <Help topic={"sampleTips"} content={"sample tip"}/> everywhere to see more tips.</div>,
					zh: <div className="paragraph">鼠标悬浮在各处的 <Help topic={"sampleTips"} content={"我是一个说明"}/> 上查看更多使用说明。</div>,
				})}

				<div className="paragraph" style={{marginTop: 16}}>
					<Expandable title={"Troubleshoot"} titleNode={<b>Troubleshoot</b>} content={
						<div className="paragraph">
							If the browser cache is somehow messed up (likely due to invalid game states), this is how to reset it:<br/>
							Enter this tool from <b>{"https://miyehn.me/ffxiv-blm-rotation/#/{command}"}</b> replacing <b>{"{command}"}</b> with one of the following:
							<ul>
								<li style={smallGap}><b>resetResourceOverrides</b>: delete all resource overrides and all actions on the current timeline.</li>
								<li style={smallGap}><b>resetAll</b>: delete all browser-cached settings.</li>
							</ul>
						</div>
					}/>
				</div>
			</div>}
		/>
		<Expandable
			defaultShow={false}
			title={"About this tool"}
			titleNode={localize({en: "About this tool", zh: "关于"})}
			content={<div>
				<div className="paragraph">{localize({en: "This is a FFXIV black mage simulator & rotation planner.", zh: "是个黑魔模拟器/排轴工具。"})}</div>
				<div className="paragraph">{localize({en: "This tool is made by:", zh: "作者："})}</div>
				{localize({
					en: <ul>
						<li><b>Eshiya (Galahad Donnadieu @ Exodus)</b>: the PM and the big brain BLM</li>
						<li><b>miyehn (Ellyn Waterford @ Sargatanas)</b>: software developer and a humble BLM student</li>
						<li><b>Turtle, Spider, Santa,</b> and many other players who contributed feature suggestions, timeline markers, bug reports, or in any other way</li>
					</ul>,
					zh: <ul>
						<li><b>Eshiya（加拉哈德 @ 沃仙曦染）</b>：PM；是个真黑魔玩家</li>
						<li><b>miyehn（米岩 @ 海猫茶屋，国服长草中）</b>：程序；是个云黑魔玩家</li>
						<li><b>Turtle, Spider, Santa</b> 等，以体验反馈、报bug、时间轴标记等形式为这个工具作出过无私贡献的玩家们</li>
					</ul>
				})}
				{localize({
					en: <div className={"paragraph"}>
						If you have questions,
						encountered bugs, or would like to suggest features, you can find me (miyehn) on discord
						(miyehn#5857), or via email (rainduym@gmail.com). In case of sending me a bug report, attaching the
						fight record (download "fight.txt" from the right or name it anything else) would be very helpful.
					</div>,
					zh: <div className={"paragraph"}>
						如果遇到bug或者有任何工具相关的问题和建议，都欢迎反馈给我（miyehn），可QQ联系（870340705），加时请注明来意。如果是反馈bug，最好把能够复现bug的时间轴记录文件（从右侧下载的fight.txt）一起发给我。
					</div>,
				})}

				<div className="paragraph">{localize({
					en: "Also, consider contributing! I'm not raiding this tier so I can't make the timeline markers..",
					zh: "贡献大欢迎！时间轴标记文件摩多摩多！孩子很久没打高难了，自己做是不可能了。"
				})}</div>

				<div className="paragraph">{localize({en: "Some links:", zh: "一些链接："})}</div>
				<ul>
					<li><a href={"https://github.com/miyehn/ffxiv-blm-rotation"}>Github repository</a></li>
					<li><a href={"https://spide-r.github.io/ffxiv-blm-rotation/"}>Black Mage in the Bozjan Shell</a>: a variation of this tool for Save the Queens areas by <b>A'zhek Silvaire @ Zalera</b></li>
					<li><a href={"https://na.finalfantasyxiv.com/jobguide/blackmage/"}>Official FFXIV black mage job
						guide</a></li>
					<li><a href={"https://discord.com/channels/277897135515762698/592613187245834260"}>
						BLM resources channel on The Balance</a> (make sure you've already joined the server)</li>
				</ul>
				<div className="paragraph"><Expandable title={"Implementation notes"} titleNode={localize({en: "Implementation notes", zh: "更新日志", ja: "実装日志"})} defaultShow={false} content={
					<div>
						<div className="paragraph">
							Galahad found that slidecast window size is linear with respect to cast time. I made a <a href={"https://github.com/miyehn/ffxiv-blm-rotation/tree/main/scripts"}>script</a>, parsed
							a few logs and confirmed this. Albeit the slope is tiny (~0.02) so I'm just using 0.5s here
							for simplicity.
						</div>
						<div className="paragraph">
							Astral fire / umbral ice refresh happens at slidecast timing (0.5s before cast finishes)
						</div>
						<div className="paragraph">
							Thanks to Galahad and Blink, skill application delays (see the last function
							argument <a href={"https://github.com/miyehn/ffxiv-blm-rotation/blob/main/src/Game/Skills.ts#L48"}>here</a>)
							should be pretty accurate now: looking at the logs, the ones for spells are between "prepare XX" to actual damage,
							the others from between "casts XX" to whatever the effect is (mostly buff apply/refresh times).
							Please contact me if you know how to measure the rest of missing data.
						</div>
						<div className="paragraph">
							Lucid dreaming ticks happen on actor ticks, which have a random offset relative to MP tick.
							The earliest first tick time is 0.3s after you press the skill button. It ticks 7 times.
						</div>
					</div>
				}/></div>
				<Changelog/>
				<Expandable
					defaultShow={false}
					title={"Debug"}
					content={<DebugOptions/>}
				/>
			</div>
			}
		/>
	</div>
}