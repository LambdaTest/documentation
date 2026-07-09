import MDXComponents from '@theme-original/MDXComponents';
import AgentSkillCallout from '@site/src/component/AgentSkillCallout/AgentSkillCallout';

// Make <AgentSkillCallout /> resolvable in MDX so the docs remark plugin
// (plugins/remark-agent-callout.js) can inject it below each page's title.
export default {
  ...MDXComponents,
  AgentSkillCallout,
};
