import React from 'react'; import { avatar } from './components/avatar/avatar'; import { button } from './components/button/button'; import { card } from './components/card/card'; import { footer } from './components/footer/footer'; import { form-field } from './components/form-field/form-field'; import { FormField } from './components/FormField/FormField'; import { grid } from './components/grid/grid'; import { header } from './components/header/header'; import { input } from './components/input/input'; import { label } from './components/label/label'; import { logo } from './components/logo/logo'; import { lucide } from './components/lucide/lucide'; import { navigation-card } from './components/navigation-card/navigation-card'; import { NavigationCard } from './components/NavigationCard/NavigationCard';
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-slate-900 border-t-4 border-blue-500 p-8 text-white">
      <header className="mb-12">
        <h1 className="text-4xl font-extrabold tracking-tight text-white mb-2">
          Comolatti Design System
        </h1>
        <p className="text-slate-400 text-lg">
          Mostruário automático sincronizado com Figma (Rocco, Branding & UI)
        </p>
      </header>
      
      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-20">
        
        <section className="p-6 border border-slate-700 rounded-xl bg-slate-800/50">
          <h2 className="text-xl font-bold mb-4 text-slate-200 capitalize">avatar</h2>
          <div className="flex flex-wrap gap-4 items-center">
            <avatar variant="default">avatar</avatar>
            <avatar variant="primary">Primary</avatar>
            <avatar variant="outline">Outline</avatar>
          </div>
        </section>
        <section className="p-6 border border-slate-700 rounded-xl bg-slate-800/50">
          <h2 className="text-xl font-bold mb-4 text-slate-200 capitalize">button</h2>
          <div className="flex flex-wrap gap-4 items-center">
            <button variant="default">button</button>
            <button variant="primary">Primary</button>
            <button variant="outline">Outline</button>
          </div>
        </section>
        <section className="p-6 border border-slate-700 rounded-xl bg-slate-800/50">
          <h2 className="text-xl font-bold mb-4 text-slate-200 capitalize">card</h2>
          <div className="flex flex-wrap gap-4 items-center">
            <card variant="default">card</card>
            <card variant="primary">Primary</card>
            <card variant="outline">Outline</card>
          </div>
        </section>
        <section className="p-6 border border-slate-700 rounded-xl bg-slate-800/50">
          <h2 className="text-xl font-bold mb-4 text-slate-200 capitalize">footer</h2>
          <div className="flex flex-wrap gap-4 items-center">
            <footer variant="default">footer</footer>
            <footer variant="primary">Primary</footer>
            <footer variant="outline">Outline</footer>
          </div>
        </section>
        <section className="p-6 border border-slate-700 rounded-xl bg-slate-800/50">
          <h2 className="text-xl font-bold mb-4 text-slate-200 capitalize">form field</h2>
          <div className="flex flex-wrap gap-4 items-center">
            <form-field variant="default">form-field</form-field>
            <form-field variant="primary">Primary</form-field>
            <form-field variant="outline">Outline</form-field>
          </div>
        </section>
        <section className="p-6 border border-slate-700 rounded-xl bg-slate-800/50">
          <h2 className="text-xl font-bold mb-4 text-slate-200 capitalize">FormField</h2>
          <div className="flex flex-wrap gap-4 items-center">
            <FormField variant="default">FormField</FormField>
            <FormField variant="primary">Primary</FormField>
            <FormField variant="outline">Outline</FormField>
          </div>
        </section>
        <section className="p-6 border border-slate-700 rounded-xl bg-slate-800/50">
          <h2 className="text-xl font-bold mb-4 text-slate-200 capitalize">grid</h2>
          <div className="flex flex-wrap gap-4 items-center">
            <grid variant="default">grid</grid>
            <grid variant="primary">Primary</grid>
            <grid variant="outline">Outline</grid>
          </div>
        </section>
        <section className="p-6 border border-slate-700 rounded-xl bg-slate-800/50">
          <h2 className="text-xl font-bold mb-4 text-slate-200 capitalize">header</h2>
          <div className="flex flex-wrap gap-4 items-center">
            <header variant="default">header</header>
            <header variant="primary">Primary</header>
            <header variant="outline">Outline</header>
          </div>
        </section>
        <section className="p-6 border border-slate-700 rounded-xl bg-slate-800/50">
          <h2 className="text-xl font-bold mb-4 text-slate-200 capitalize">input</h2>
          <div className="flex flex-wrap gap-4 items-center">
            <input variant="default">input</input>
            <input variant="primary">Primary</input>
            <input variant="outline">Outline</input>
          </div>
        </section>
        <section className="p-6 border border-slate-700 rounded-xl bg-slate-800/50">
          <h2 className="text-xl font-bold mb-4 text-slate-200 capitalize">label</h2>
          <div className="flex flex-wrap gap-4 items-center">
            <label variant="default">label</label>
            <label variant="primary">Primary</label>
            <label variant="outline">Outline</label>
          </div>
        </section>
        <section className="p-6 border border-slate-700 rounded-xl bg-slate-800/50">
          <h2 className="text-xl font-bold mb-4 text-slate-200 capitalize">logo</h2>
          <div className="flex flex-wrap gap-4 items-center">
            <logo variant="default">logo</logo>
            <logo variant="primary">Primary</logo>
            <logo variant="outline">Outline</logo>
          </div>
        </section>
        <section className="p-6 border border-slate-700 rounded-xl bg-slate-800/50">
          <h2 className="text-xl font-bold mb-4 text-slate-200 capitalize">lucide</h2>
          <div className="flex flex-wrap gap-4 items-center">
            <lucide variant="default">lucide</lucide>
            <lucide variant="primary">Primary</lucide>
            <lucide variant="outline">Outline</lucide>
          </div>
        </section>
        <section className="p-6 border border-slate-700 rounded-xl bg-slate-800/50">
          <h2 className="text-xl font-bold mb-4 text-slate-200 capitalize">navigation card</h2>
          <div className="flex flex-wrap gap-4 items-center">
            <navigation-card variant="default">navigation-card</navigation-card>
            <navigation-card variant="primary">Primary</navigation-card>
            <navigation-card variant="outline">Outline</navigation-card>
          </div>
        </section>
        <section className="p-6 border border-slate-700 rounded-xl bg-slate-800/50">
          <h2 className="text-xl font-bold mb-4 text-slate-200 capitalize">NavigationCard</h2>
          <div className="flex flex-wrap gap-4 items-center">
            <NavigationCard variant="default">NavigationCard</NavigationCard>
            <NavigationCard variant="primary">Primary</NavigationCard>
            <NavigationCard variant="outline">Outline</NavigationCard>
          </div>
        </section>
      </main>

      <footer className="fixed bottom-0 left-0 w-full bg-slate-900/80 backdrop-blur border-t border-slate-800 p-4 text-center text-slate-400 text-sm italic">
        Powered by Antigravity AI & Figma API | 2026
      </footer>
    </div>
  );
}

export default App;