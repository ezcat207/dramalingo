import Link from 'next/link';
import { mvpDrama } from '@/lib/learning-data';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      <div className="container mx-auto px-4 py-8 md:py-16">
        {/* Hero Section */}
        <div className="text-center text-white mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            DramaLingo
          </h1>
          <p className="text-xl md:text-2xl mb-2">
            多邻国 · 短剧版
          </p>
          <p className="text-lg opacity-90">
            Learn Chinese through Short Dramas
          </p>
        </div>

        {/* Drama Card */}
        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Video Preview */}
          <div className="aspect-video bg-black relative">
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${mvpDrama.videoId}`}
              title={mvpDrama.titleZh}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* Drama Info */}
          <div className="p-6 md:p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              {mvpDrama.titleZh}
            </h2>
            <h3 className="text-xl text-gray-600 mb-4">
              {mvpDrama.titleEn}
            </h3>

            <p className="text-gray-700 mb-6 leading-relaxed">
              {mvpDrama.description}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center p-4 bg-indigo-50 rounded-lg">
                <div className="text-2xl font-bold text-indigo-600">
                  {mvpDrama.episodes.length}
                </div>
                <div className="text-sm text-gray-600">Episodes</div>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <div className="text-2xl font-bold text-purple-600">
                  20
                </div>
                <div className="text-sm text-gray-600">Quizzes</div>
              </div>
              <div className="text-center p-4 bg-pink-50 rounded-lg">
                <div className="text-2xl font-bold text-pink-600">
                  6
                </div>
                <div className="text-sm text-gray-600">Badges</div>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {mvpDrama.tags?.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* CTA Button */}
            <Link
              href="/learn/inside-outside/1"
              className="block w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-center py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
            >
              Start Learning 开始学习 →
            </Link>
            <p className="text-center text-sm text-gray-500 mt-2">
              Begin with Episode 1: {mvpDrama.episodes[0].title}
            </p>

            {/* Episode List Preview */}
            <div className="mt-8 border-t pt-6">
              <h4 className="font-semibold text-gray-900 mb-4">
                📚 Episode List (MVP - 5 Episodes)
              </h4>
              <div className="space-y-3">
                {mvpDrama.episodes.map((episode) => (
                  <Link
                    key={episode.episodeNumber}
                    href={`/learn/inside-outside/${episode.episodeNumber}`}
                    className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
                  >
                    <div className="font-medium text-gray-900">
                      Episode {episode.episodeNumber}: {episode.title}
                    </div>
                    <div className="text-sm text-gray-600 mt-1">
                      {episode.summary}
                    </div>
                    <div className="text-xs text-gray-500 mt-2">
                      {episode.quizzes.length} quizzes ready
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-white mt-12 opacity-75 text-sm">
          <p>
            🤖 Generated with{' '}
            <a href="https://claude.ai/code" className="underline hover:opacity-100">
              Claude Code
            </a>
            {' '}via{' '}
            <a href="https://happy.engineering" className="underline hover:opacity-100">
              Happy
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
