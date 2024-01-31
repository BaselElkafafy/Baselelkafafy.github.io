class FeaturedMetrics {
  private metrics: Record<string, string | number>;

  constructor() {
    this.metrics = {};
  }

  // Add a metric with its value
  addMetric(title: string, value: string | number): void {
    this.metrics[title] = value;
  }

  // Get the value of a specific metric
  getMetricValue(title: string): string | number | undefined {
    return this.metrics[title];
  }

  // Display metrics in a formatted way
  displayMetrics(): void {
    console.log('<section class="features-metrics">');
    console.log('<div class="container-3">');
    console.log('<div class="features-wrapper">');

    // Iterate through metrics and display each block
    for (const title in this.metrics) {
      const value = this.metrics[title];
      console.log('<div class="features-block">');
      console.log('<div>');
      
      // Check if the metric has a small title (for percentage)
      const hasSmallTitle = typeof value === 'string' && value.includes('%');

      // Display the metric value with dynamic content and attributes
      console.log(`<div fb-count-delay="800" fb-count="true" fb-count-target="${value}" fb-count-time="${Math.floor(Math.random() * 5) + 1}" class="features-title">${hasSmallTitle ? value.replace('%', '') : value}<span class="features-title-small">${hasSmallTitle ? '%' : ''}</span></div>`);
      console.log('</div>');
      console.log(`<div class="text-block-${hasSmallTitle ? 3 : 4}">${title}</div>`);
      console.log('</div>');
    }

    console.log('</div>');
    console.log('</div>');
    console.log('</section>');
  }
}

// Example usage
const featuredMetrics = new FeaturedMetrics();

// Adding featured metrics with specific values
featuredMetrics.addMetric("Projects Done", 14);
featuredMetrics.addMetric("Generated Revenue", "10M L.E");
featuredMetrics.addMetric("Clients", "+21");
featuredMetrics.addMetric("Satisfaction Guarantee", "99%");

// Display the featured metrics
featuredMetrics.displayMetrics();
