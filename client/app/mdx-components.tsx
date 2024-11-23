import type { MDXComponents } from 'mdx/types'
 
export function useMDXComponents(components: MDXComponents): MDXComponents {
  
  return {
    h1: (props) => <h1 className="text-2xl font-bold" {...props} />,
    code: (props) => (
      <code className="bg-gray-100 text-red-500 px-1 rounded" {...props} />
    ),
    pre: (props) => (
      <pre className="bg-gray-800 text-white p-4 rounded" {...props} />
    ),
  
    ...components,
  }
}