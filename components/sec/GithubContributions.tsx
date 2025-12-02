import { GitHubCalendar } from "react-github-calendar";

export default function GithubContributions() {
  return (
    <div className="w-full flex justify-center items-center">
      <GitHubCalendar
        username={'Anjansuman'}
        blockSize={8}
        blockMargin={3}
        fontSize={10}
        colorScheme={'dark'}
        theme={{
          dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
        }}
        style={{
          width: '100%',
          maxWidth: '100%',
          color: 'white',
        }}
      />
    </div>
  );
}