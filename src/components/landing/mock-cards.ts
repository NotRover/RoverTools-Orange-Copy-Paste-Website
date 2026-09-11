/**
 * Builds an entry card in the DOM, the way the app's EntryCard draws one.
 *
 * Both animated sections need this: the hero pushes a card per capture, and the
 * demo section rebuilds its grid for every scene. The markup here is the same
 * `oc-card` shape the static mocks write by hand in Astro - keep the two in step.
 */
import {
	CHIP_ICONS,
	GROUP_COLORS,
	KIND_COLORS,
	SRC_ICONS,
	THUMBS,
	TYPE_LABELS,
} from './app-parts';

export interface MockEntry {
	kind: string;
	content: string;
	/** [name, colour key] of the group chip, when the entry is in one */
	group?: readonly [string, string];
	/** key into THUMBS, for image and video entries */
	thumb?: string;
	/** name of the space member it arrived from, when it is not yours */
	owner?: string;
	/** how many spaces it is shared into */
	spaces?: number;
	/** it has a cloud copy: 'synced', or 'pending' while the push is queued */
	sync?: 'synced' | 'pending';
}

export interface CardOptions {
	/** the entry sitting on the clipboard right now */
	active?: boolean;
	/** the time shown at the right of the footer */
	age?: string;
	/** draw the select-mode checkbox */
	select?: boolean;
	/** and tick it */
	picked?: boolean;
}

export function makeCard(s: MockEntry, o: CardOptions = {}): HTMLElement {
	const card = document.createElement('div');
	card.className =
		'oc-card' +
		(o.active ? ' oc-card--in-clipboard' : '') +
		(o.picked ? ' oc-card--picked' : '');
	card.dataset.kind = s.kind;
	card.dataset.text = s.content.toLowerCase();

	const thumb = s.thumb ? THUMBS[s.thumb as keyof typeof THUMBS] : '';
	// a video card is a bare frame at rest in the app (controls show on hover
	// only, no play badge), so it draws the same as an image card
	const media =
		s.kind === 'image' || s.kind === 'video'
			? `<div class="oc-card-media"><img class="oc-card-media-img" src="${thumb}" alt="" /></div>`
			: '';

	const textCls =
		s.kind === 'image'
			? 'oc-card-text--imgname'
			: s.kind === 'text'
				? 'oc-card-text'
				: 'oc-card-text oc-card-text--clamp';
	// rich text is the one kind that is not a string of characters: it keeps its
	// own headings and lists, capped and faded exactly as the app does.
	const body =
		s.kind === 'html'
			? `<div class="oc-card-html">${s.content}</div>`
			: `<p class="${textCls}">${s.content}</p>`;

	const group = s.group
		? `<span class="oc-chip oc-chip--group" style="--cc:${GROUP_COLORS[s.group[1] as keyof typeof GROUP_COLORS]}"><span class="oc-chip-dot"></span><span class="oc-chip-label">${s.group[0]}</span></span>`
		: '';
	const owner = s.owner
		? `<span class="oc-owner-chip"><span class="oc-owner-avatar">${s.owner[0]!.toUpperCase()}</span><span class="oc-owner-name">${s.owner}</span></span>`
		: '';
	const shared = s.spaces
		? `<span class="oc-share-mark">${SRC_ICONS.shareNetwork15}<span class="oc-share-count">${s.spaces}</span></span>`
		: '';
	// ChipBar.tsx: CloudCheck 15 once synced, CloudArrowUp 15 while waiting to upload
	const sync = s.sync
		? `<span class="oc-sync-tick${s.sync === 'pending' ? ' oc-sync-tick--pending' : ''}">${s.sync === 'pending' ? SRC_ICONS.cloudArrowUp15 : SRC_ICONS.cloudCheck15}</span>`
		: '';
	const check = o.select ? `<span class="oc-card-check">${CHIP_ICONS.check}</span>` : '';

	card.innerHTML = `
		${check}
		${media}
		<div class="oc-card-body">
			${body}
			<div class="oc-card-footer">
				<span class="oc-chips">
					<span class="oc-chip" style="--cc:${KIND_COLORS[s.kind as keyof typeof KIND_COLORS]}">${CHIP_ICONS[s.kind as keyof typeof CHIP_ICONS] ?? ''}<span class="oc-chip-label">${TYPE_LABELS[s.kind as keyof typeof TYPE_LABELS]}</span></span>
					${group}
					${owner}
				</span>
				${shared}
				${sync}
				<span class="oc-time">${o.age ?? 'Just now'}</span>
			</div>
		</div>`;
	return card;
}
