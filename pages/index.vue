<template>
  <div class="max-w-3xl my-8 md:my-16 lg:my-32 mx-auto px-4 overflow-x-hidden md:overflow-x-visible">
    <section>
      <div class="text-gray-500 font-bold text-xs uppercase tracking-wide font-mono">Jonas Schwendener <span class="text-red-600">//</span> Full Stack Web Developer</div>
      <h1>Hi, i'm <strong>Jonas Schwendener</strong>, I passionately design and develop software for the modern web.</h1>
      <p class="text-xl">My work includes many web-based projects including small artist portfolios, corporate websites for companies, sports teams and also large scale web applications with integrations to third-party systems and services.</p>
    </section>

    <section>
      <h2>Portfolio</h2>
      <div class="flex flex-wrap -mx-8">
        <div class="w-full md:w-1/2 p-2">
          <a href="https://exano.io" target="_blank" rel="noopener" class="card h-full">
            <h3>Exano</h3>
            Exano is a business software for agencies, freelancers and other small to medium-sized companies.
          </a>
        </div>

        <div class="w-full md:w-1/2 p-2">
          <a href="https://racerfish.com/de/nitrous" target="_blank" rel="noopener" class="card h-full">
            <h3>Nitrous</h3>
            Nitrous is a full-featured CMS and digital marketing platform developed by Racerfish
          </a>
        </div>

        <div class="w-full md:w-1/2 p-2">
          <a href="https://github.com/jschwendener?tab=repositories" target="_blank" rel="noopener" class="card h-full">
            <h3>Vue renderless components</h3>
            I work on a few open-source renderless components for the Vue ecosystem
          </a>
        </div>

        <div class="w-full md:w-1/2 p-2">
          <a href="https://racerfish.com" target="_blank" rel="noopener" class="card h-full">
            <h3>Web development for RACERFISH</h3>
            I've worked on countless corporate websites and ecommerce projects at Racerfish
          </a>
        </div>
      </div>
    </section>

    <section>
      <h2>Work and education history</h2>
      <div class="flex flex-wrap -mx-8">
        <div class="w-full md:w-1/2 p-2">
          <a href="https://exano.io" target="_blank" rel="noopener" class="card h-full">
            <h3>Lead Developer</h3>
            <div class="font-bold">Exano</div>
            <div>2019 - today</div>
          </a>
        </div>

        <div class="w-full md:w-1/2 p-2">
          <a href="https://racerfish.com" target="_blank" rel="noopener" class="card h-full">
            <h3>Lead Developer</h3>
            <div class="font-bold">Racerfish AG</div>
            <div>2014 - today</div>
          </a>
        </div>

        <div class="w-full md:w-1/2 p-2">
          <a href="https://racerfish.com" target="_blank" rel="noopener" class="card h-full">
            <h3>Composer / Music Producer</h3>
            <div class="font-bold">Racerfish AG</div>
            <div>2016 - today</div>
          </a>
        </div>

        <div class="w-full md:w-1/2 p-2">
          <a href="https://ospelt.com" target="_blank" rel="noopener" class="card h-full">
            <h3>Software Engineer PHP/MySQL</h3>
            <div class="font-bold">Ospelt Group</div>
            <div>2012 - 2013</div>
          </a>
        </div>

        <div class="w-full md:w-1/2 p-2">
          <a href="https://ospelt.com" target="_blank" rel="noopener" class="card h-full">
            <h3>BA Computer Science</h3>
            <div class="font-bold">HSR Hochschule für Technik Rapperswil</div>
            <div>2011 - 2014</div>
          </a>
        </div>

        <div class="w-full md:w-1/2 p-2">
          <a href="https://ospelt.com" target="_blank" rel="noopener" class="card h-full">
            <h3>System & Network Administrator</h3>
            <div class="font-bold">Ospelt Group</div>
            <div>2006 - 2010</div>
          </a>
        </div>
      </div>
    </section>

    <section>
      <h2>Contact</h2>
      <p>Easiest way to get in contact with me is via <a href="mailto:jsch@hey.com" class="text-white border-b border-gray-700 font-bold">e-mail</a>. If you want to meet me in person, come visit us at the RACERFISH headquaters at <a href="https://rarestreetcoffee.ch" class="text-white border-b border-gray-700 font-bold" target="_blank" rel="noopener">Rare Street Coffee</a> in Rapperswil, Switzerland.</p>
    </section>
  

  </div>
</template>

<script>
export default {}
</script>

<style>
body {
  background: radial-gradient(circle at center bottom, theme('colors.gray.900') -20%, transparent 40%), 
              radial-gradient(circle at center top, theme('colors.gray.900'), #000);
  /* background-attachment: fixed; */
  font-family: 'Arimo', system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  @apply bg-gray-900 text-gray-400 leading-normal min-h-screen text-lg;
}

h1 {
  @apply text-3xl text-white mt-4 mb-8 leading-none;

  @screen md {
    @apply text-4xl;
  }

  @screen xl {
    @apply text-5xl;
  }
}

h2 {
  @apply text-2xl text-red-600 my-3 leading-none;
}

h3 {
  @apply text-white font-bold leading-none mb-1;
}

section + section {
  @apply mt-8;

  @screen md {
    @apply mt-16;
  }
}

.card {
  @apply block border-t border-solid border-gray-900 p-6 text-gray-600 text-base transition duration-150 ease-in-out;
}

.card:hover {
  @apply bg-gray-900 text-gray-600 border-gray-700 transform -translate-y-1;
}
</style>
