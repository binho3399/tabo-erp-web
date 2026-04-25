import { useEffect, useId, useState } from 'react'
import mermaid from 'mermaid'

interface MermaidDiagramProps {
  chart: string
  title?: string
  className?: string
}

interface RenderState {
  svg: string | null
  error: string | null
}

let isMermaidInitialized = false

function getMermaidTheme() {
  if (typeof document === 'undefined') {
    return 'default'
  }

  return document.documentElement.classList.contains('dark') ? 'dark' : 'default'
}

function initializeMermaid() {
  if (isMermaidInitialized) {
    return
  }

  mermaid.initialize({
    startOnLoad: false,
    securityLevel: 'strict',
    theme: getMermaidTheme(),
    suppressErrorRendering: true,
  })

  isMermaidInitialized = true
}

export default function MermaidDiagram({ chart, title = 'Sơ đồ Mermaid', className }: MermaidDiagramProps) {
  const [renderState, setRenderState] = useState<RenderState>({ svg: null, error: null })
  const diagramId = useId().replace(/:/g, '')

  useEffect(() => {
    let isActive = true

    async function renderDiagram() {
      const normalizedChart = chart.trim()
      if (!normalizedChart) {
        if (isActive) {
          setRenderState({ svg: null, error: 'Biểu đồ Mermaid đang trống.' })
        }
        return
      }

      try {
        initializeMermaid()
        mermaid.initialize({
          startOnLoad: false,
          securityLevel: 'strict',
          theme: getMermaidTheme(),
          suppressErrorRendering: true,
        })

        const { svg } = await mermaid.render(`${diagramId}-diagram`, normalizedChart)

        if (isActive) {
          setRenderState({ svg, error: null })
        }
      } catch (error) {
        if (isActive) {
          const message = error instanceof Error ? error.message : 'Không thể render Mermaid.'
          setRenderState({ svg: null, error: message })
        }
      }
    }

    void renderDiagram()

    return () => {
      isActive = false
    }
  }, [chart, diagramId])

  if (renderState.error) {
    return (
      <figure className={className}>
        <figcaption className="mb-2 text-sm font-medium text-slate-600 dark:text-slate-300">{title}</figcaption>
        <pre className="overflow-x-auto rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900 dark:border-amber-700/40 dark:bg-amber-950/30 dark:text-amber-200">
          {renderState.error}
        </pre>
      </figure>
    )
  }

  if (!renderState.svg) {
    return (
      <figure className={className}>
        <figcaption className="mb-2 text-sm font-medium text-slate-600 dark:text-slate-300">{title}</figcaption>
        <div className="h-32 animate-pulse rounded-2xl border border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900/70" />
      </figure>
    )
  }

  return (
    <figure className={className}>
      <figcaption className="mb-2 text-sm font-medium text-slate-600 dark:text-slate-300">{title}</figcaption>
      <div
        className="overflow-x-auto rounded-2xl border border-slate-100 bg-white p-4 dark:border-slate-800 dark:bg-slate-900/80"
        dangerouslySetInnerHTML={{ __html: renderState.svg }}
      />
    </figure>
  )
}
