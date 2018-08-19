let contentPanels = [{
  title: "Simulation and Measurement of Biomass Suspension Rheology",
  alt: "biomass energy",
  content: "Microalgae are productive at utilizing CO2 and can generate biomass for production of biodiesel, methane, or other fuels as well as valuable co-products (e.g. animal feeds, polymers). Algal biofuel production can be more profitable and sustainable when combined with wastewater treatment and CO2 utilization from electric power generation facilities. A number of research gaps exist for full scale algal biofuel production including: 1) improvement of algal growth and nutrient uptake rates,  2) integration of systems with waste gas, wastewater, and water reclamation systems, 3) improved gas transfer and mixing, 4) improved algal harvesting and dewatering and 5) life cycle assessment (LCA) and economic analysis. 5) development of integrated LCA-economic assessment tools to assist in algal biofuel system decision.",
  imgSource: "../../images/research-images/biomass-energy.jpg",
  budget: "$50,000",
  timePeriod: "2/1/2010-6/30/2012",
  universities: "USF",
  collaborators: "Mote Marine Lab",
  projectStatus: "This project has been completed"
}, {
  title: "Buoy Array for Ocean Wave Power Generation",
  alt: "ocean energy",
  content: "The objective of this project is to develop a novel design that can extract ocean wave energy for commercial consumption. The design detailed herein is unique in that it is a wave point energy harvester that is small in size and contains all of the mechanical components directly within the buoy. The project focuses mainly on the mechanical system within the buoy as well as methods to control the electrical load on the system.",
  imgSource: "../../images/research-images/ocean-energy.jpg",
  budget: "$150,000",
  timePeriod: "2/1/2010-6/30/2012",
  universities: "USF",
  collaborators: "none",
  projectStatus: "This project has been completed"
}, {
  title: "Biocatalytic Lignin Modification for Carbon Sequestration",
  alt: "carbon sequestration",
  content: "After cellulose, lignin is the second most abundant form of carbon in plants. Lignin’s complex structure makes it difficult to use this material in value-added products, and the vast majority of lignin is currently burned to provide energy for factory operations. While burning plant derived lignin does not add to global greenhouse gas levels , having options to remove lignin from the global carbon cycle would lead to diminished atmospheric CO2 levels. This could be accomplished by  chemically altering lignin's structure to facilitate long-term terrestrial sequestration or using it in value-added products that would not be discarded immediately. We will use Nature's catalysts (enzymes) to tailor the chemical structure of lignin for both deep-well injection (by using lignin derivatives as drilling \"muds\") and for materials that can be used in building, packaging, and other manufactured products.",
  imgSource: "../../images/research-images/carbon-sequestration.jpg",
  budget: "$200,000",
  timePeriod: "2/1/2010-6/30/2012",
  universities: "USF",
  collaborators: "none",
  projectStatus: "This project has been completed"
}]

document.addEventListener("DOMContentLoaded", function() {
  let contentPanelListings = new Vue({
    el: '#contentPanelListings',
    data: {
      panels: contentPanels,
    }
  })
})
