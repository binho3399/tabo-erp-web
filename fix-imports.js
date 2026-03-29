import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

const filesToUpdate = [
    'src/components/home/StrategySection.tsx',
    'src/components/home/PricingSection.tsx',
    'src/components/home/VisionSection.tsx',
    'src/components/home/HeroSection.tsx',
    'src/components/home/TestimonialsSection.tsx',
    'src/components/home/SolutionsSection.tsx',
    'src/components/home/FeaturesSection.tsx',
    'src/components/home/PricingFeatures.tsx',
    'src/components/home/StripBanner.tsx',
    'src/components/home/CTASection.tsx',
    'src/components/home/PricingFAQ.tsx',
    'src/pages/About.tsx',
    'src/pages/Pricing.tsx'
];

filesToUpdate.forEach(file => {
    const filePath = path.join(ROOT, file);
    if (!fs.existsSync(filePath)) return;
    
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Pattern 1: import X from '../common/X' or '../components/common/X'
    // We want to combine these into one import from @/components/ui
    const imports = [];
    const components = ['Badge', 'Button', 'Icon', 'Accordion'];
    
    components.forEach(comp => {
        const regex = new RegExp(`import\\s+${comp}\\s+from\\s+['"](\\.\\./)+(components/)?common/${comp}['"];?\\n?`, 'g');
        if (regex.test(content)) {
            imports.push(comp);
            content = content.replace(regex, '');
        }
    });

    if (imports.length > 0) {
        const newImport = `import { ${imports.sort().join(', ')} } from '@/components/ui';\n`;
        // Insert at the top after React import or first import
        content = newImport + content;
    }

    fs.writeFileSync(filePath, content);
    console.log(`Updated ${file}`);
});
