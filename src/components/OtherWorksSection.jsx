import React, { useEffect, useRef } from 'react';
import { Sparkles, Instagram, Camera, ExternalLink, MapPin } from 'lucide-react';

const IG_PROFILE = 'https://www.instagram.com/mefile_.photo/';

// Posts from @mefile_.photo. Instagram renders the real photo client-side via
// embed.js, so only the permalink is stored here — the caption/date/location
// below are just the themed fallback shown until the embed finishes loading.
const posts = [
  {
    shortcode: 'DVnMa9BibUC',
    type: 'p',
    caption: '🤍',
    date: '7 มี.ค. 2569',
    location: 'สวนเฉลิมพระเกียรติ อบจ.เชียงใหม่',
  },
  {
    shortcode: 'DSnOjOuCSuP',
    type: 'p',
    caption: '🙂 #photographer #sony #chaingmai',
    date: '23 ธ.ค. 2568',
    location: null,
  },
  {
    shortcode: 'DRxXKekk3Vs',
    type: 'p',
    caption: '💐',
    date: '2 ธ.ค. 2568',
    location: 'สวนเฉลิมพระเกียรติ อบจ.เชียงใหม่',
  },
  {
    shortcode: 'DRuiGHSif2i',
    type: 'p',
    caption: 'Live performance',
    date: '1 ธ.ค. 2568',
    location: null,
  },
  {
    shortcode: 'DRueM64ifJk',
    type: 'p',
    caption: 'Klear🌙',
    date: '1 ธ.ค. 2568',
    location: null,
  },
  {
    shortcode: 'DRuas2NCdTu',
    type: 'p',
    caption: 'Tilly Birds😇',
    date: '1 ธ.ค. 2568',
    location: null,
  },
  {
    shortcode: 'DRuXtcqiV-t',
    type: 'p',
    caption: 'Polycat💫',
    date: '1 ธ.ค. 2568',
    location: null,
  },
  {
    shortcode: 'DRpsrHck4ol',
    type: 'p',
    caption: 'Billkin✨ #ChanMusicConnection #เชียงใหญ่เฟส6',
    date: '29 พ.ย. 2568',
    location: null,
  },
  {
    shortcode: 'DRkdEVhE_ud',
    type: 'p',
    caption: '🎂🎄✨ #เชียงใหม่ #ช่างภาพ #รับถ่ายภาพ',
    date: '27 พ.ย. 2568',
    location: 'Think Park Chiang Mai',
  },
  {
    shortcode: 'DRC650eE20U',
    type: 'reel',
    caption: '🌥️ #เชียงใหม่ #อ่างแก้ว #เพลงเศร้า',
    date: '14 พ.ย. 2568',
    location: null,
  },
  {
    shortcode: 'DQ-dIWtExPa',
    type: 'p',
    caption: '🎷🎺🎼✨ #งานฤดูหนาวเชียงใหม่ #เชียงใหม่',
    date: '12 พ.ย. 2568',
    location: 'สวนเฉลิมพระเกียรติฯ 80 พรรษา อบจ.ชม.',
  },
  {
    shortcode: 'DO1BJWgCXJf',
    type: 'p',
    caption: '🏮🌌',
    date: '20 ก.ย. 2568',
    location: null,
  },
];

const EMBED_SRC = 'https://www.instagram.com/embed.js';

/**
 * Loads Instagram's embed script once per page, then asks it to turn every
 * .instagram-media blockquote into a real iframe. Re-running process() is safe:
 * Instagram skips blockquotes it has already handled.
 */
const useInstagramEmbeds = (deps) => {
  const processed = useRef(false);

  useEffect(() => {
    const process = () => {
      if (window.instgrm?.Embeds?.process) {
        window.instgrm.Embeds.process();
        processed.current = true;
      }
    };

    const existing = document.querySelector(`script[src="${EMBED_SRC}"]`);
    if (existing) {
      process();
      // Script tag present but still in flight on a fast re-mount.
      existing.addEventListener('load', process);
      return () => existing.removeEventListener('load', process);
    }

    const script = document.createElement('script');
    script.src = EMBED_SRC;
    script.async = true;
    script.addEventListener('load', process);
    document.body.appendChild(script);
    return () => script.removeEventListener('load', process);
  }, deps);
};

const PostEmbed = ({ post }) => {
  const permalink = `https://www.instagram.com/${post.type}/${post.shortcode}/`;

  return (
    <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#14161f] hover:border-[#4d44b5]/60 transition-colors duration-300 h-fit">
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={permalink}
        data-instgrm-version="14"
        data-instgrm-captioned
        style={{ background: '#14161f', margin: 0, padding: 0, width: '100%', minWidth: 0 }}
      >
        {/* Themed fallback: replaced by Instagram's iframe once embed.js runs.
            Also what a visitor sees if Instagram is blocked or offline. */}
        <a
          href={permalink}
          target="_blank"
          rel="noopener noreferrer"
          className="block p-6 group no-underline"
        >
          <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-[#4d44b5] font-bold mb-3">
            <Instagram className="w-3.5 h-3.5" />
            <span>{post.type === 'reel' ? 'Reel' : 'Photo'}</span>
          </div>
          <p className="text-base text-white font-semibold leading-relaxed mb-3">
            {post.caption}
          </p>
          {post.location && (
            <p className="text-xs text-[#9e9e9e] flex items-center gap-1.5 mb-2">
              <MapPin className="w-3.5 h-3.5 text-[#4d44b5] shrink-0" />
              <span>{post.location}</span>
            </p>
          )}
          <div className="flex items-center justify-between pt-3 border-t border-white/10">
            <span className="text-xs font-mono text-[#9e9e9e]">{post.date}</span>
            <span className="text-xs font-mono text-[#7c73e6] flex items-center gap-1 group-hover:gap-2 transition-all">
              View on Instagram
              <ExternalLink className="w-3.5 h-3.5" />
            </span>
          </div>
        </a>
      </blockquote>
    </div>
  );
};

export const OtherWorksSection = () => {
  useInstagramEmbeds([]);

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#4d44b5]/20 border border-[#4d44b5]/40 text-xs font-mono text-purple-300 mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#4d44b5]" />
            <span>PHOTOGRAPHY PORTFOLIO</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white">
            Other Works &amp;{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7c73e6] via-[#4d44b5] to-purple-400">
              Creative Media
            </span>
          </h2>
          <p className="text-[#9e9e9e] text-sm sm:text-base mt-1">
            Concert, event, and landscape photography shot on a Sony a5100 around Chiang Mai — published live from{' '}
            <a
              href={IG_PROFILE}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#7c73e6] hover:text-purple-300 underline underline-offset-2 transition-colors"
            >
              @mefile_.photo
            </a>
            .
          </p>
        </div>
        <a
          href={IG_PROFILE}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-mono text-[#9e9e9e] bg-[#14161f] px-4 py-2 rounded-xl border border-white/10 hover:border-[#4d44b5]/60 hover:text-white transition-colors flex items-center gap-2 shrink-0"
        >
          <Camera className="w-4 h-4 text-[#4d44b5]" />
          <span>DM for work</span>
        </a>
      </div>

      {/* Grid, not CSS columns: columns flow items down each column, which
          would scramble the newest-first order. Rows stay ragged because
          Instagram sizes each iframe to its own caption/carousel. */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 items-start">
        {posts.map((post) => (
          <PostEmbed key={post.shortcode} post={post} />
        ))}
      </div>

      {/* Footer CTA */}
      <div className="flex justify-center pt-2">
        <a
          href={IG_PROFILE}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#4d44b5]/20 border border-[#4d44b5]/40 text-sm font-mono text-purple-200 hover:bg-[#4d44b5]/30 hover:border-[#4d44b5] transition-all"
        >
          <Instagram className="w-4 h-4" />
          <span>See all posts on @mefile_.photo</span>
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};
