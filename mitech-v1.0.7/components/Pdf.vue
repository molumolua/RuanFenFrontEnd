<template>
    <div class="pdf-viewer-wrap">
        <div id="pdfjs-container" class="page-container">
            <div id="pdfViewer" class="pdfViewer"></div>
        </div>
    </div>
    <div id="pdf-hidden" style="height: 1000px;"></div>
</template>

<script setup lang="ts">
import 'pdfjs-dist/web/pdf_viewer.css'
import * as pdfjsLib from 'pdfjs-dist'
import * as pdfjsViewer from 'pdfjs-dist/web/pdf_viewer'
import 'pdfjs-dist/build/pdf.worker.entry'
import * as pdfjsSandbox from 'pdfjs-dist/build/pdf.sandbox.js'
import { PDFDocumentProxy } from 'pdfjs-dist/types/src/display/api'

const props = defineProps({
    url: {
        type: String
    }
})

const SANDBOX_BUNDLE_SRC = pdfjsSandbox

pdfjsLib.GlobalWorkerOptions.workerSrc = window.pdfjsWorker

const CMAP_URL = '/pdfjs-dist/cmaps/'
const CMAP_PACKED = true
const STANDARD_FONT_DATA_URL = '/pdfjs-dist/standard_fonts/'

window.pdfjsLib = pdfjsLib
window.pdfjsViewer = pdfjsViewer

const pdfEventBus = new pdfjsViewer.EventBus()

const pdfScriptingManager = new pdfjsViewer.PDFScriptingManager({
    eventBus: pdfEventBus,
    sandboxBundleSrc: SANDBOX_BUNDLE_SRC,
})
const pdfLinkService = new pdfjsViewer.PDFLinkService({
    eventBus: pdfEventBus,
})

// (Optionally) enable find controller.
const pdfFindController = new pdfjsViewer.PDFFindController({
    eventBus: pdfEventBus,
    linkService: pdfLinkService,
})

var pdfViewer: pdfjsViewer.PDFViewer | null = null
var pdfDocument: PDFDocumentProxy | null = null

const pdfUrl = props.url
async function initPage() {
    if (!pdfUrl) return
    var container = document.getElementById(`pdfjs-container`)
    pdfDocument = await pdfjsLib.getDocument({
        url: pdfUrl as unknown as URL,
        cMapUrl: CMAP_URL,
        cMapPacked: CMAP_PACKED,
        standardFontDataUrl: STANDARD_FONT_DATA_URL,
    }).promise
    pdfViewer = new pdfjsViewer.PDFViewer({
        container: container as unknown as HTMLDivElement,
        eventBus: pdfEventBus,
        annotationMode: 0,
        annotationEditorMode: 0,
        scriptingManager: pdfScriptingManager,
        linkService: pdfLinkService,
    })

    pdfScriptingManager.setDocument(pdfDocument)
    pdfScriptingManager.setViewer(pdfViewer)
    pdfLinkService.setDocument(pdfDocument)
    pdfLinkService.setViewer(pdfViewer)

    pdfViewer.setDocument(pdfDocument)

    pdfEventBus.on('pagesinit', () => {
        if (pdfViewer) {
            console.log('init')
        }
    })
}

onMounted(async () => {
    initPage()
})
</script>
<style lang="scss" scoped>
.pdf-viewer-wrap {
    // border: 1px solid blue;
    #pdfjs-container {
        position: absolute;
        left: 0;
        top: 130px;
        width: 90%;
        height: 90%;
        // overflow: auto;
        // border: 2px solid red;
    }
}
</style>