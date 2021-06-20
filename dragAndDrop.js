function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    console.log(document.getElementById(data).getAttribute("id"));
    if(document.getElementById(data).getAttribute("id") == "drag1"){
        document.querySelector(".verdict").innerHTML = "Water lilies do not have surface leaves during winter, and therefore the gases in the rhizome lacunae access equilibrium with the gases of the sediment water. The leftover of internal pressure is embodied by the constant streams of bubbles that outbreak when rising leaves are ruptured in the spring. When water lilies grow too thickly over the water's surface, they interfere with oxygen exchange. The large pads trap heat in the water which leads to algae blooms and stagnation. The stagnant water makes prime habitat for mosquitoes. Though not easy to eliminate, you can slow the spread by pulling up the plants by the roots. In shallow water, dig down deep enough to get as much of the roots as possible. Continue to clear the pond yearly until the water lilies are gone or at least thinned out.";
    }
    else if(document.getElementById(data).getAttribute("id") == "drag2"){
        document.querySelector(".verdict").innerHTML = "This flower is hibiscus. Best temperature to grow hibiscus is 16-62 degree celsius. Hibiscus is a genus of flowering plants in the mallow family, Malvaceae. The genus is quite large, comprising several hundred species that are native to warm temperate, subtropical and tropical regions throughout the world. Aphids: Tiny green, white, or black pests that suck the juices from the foliage, usually found in clusters. Control aphids with horticultural oil or insecticidal soap. Whiteflies: Miniscule, gnat-sized pests that suck juices, usually from the undersides of leaves. Control whiteflies with horticultural oil, insecticidal soap, or sticky traps. Use chemical pesticides only when all else fails. Toxic chemicals can decimate beneficial insects, thus making the pest problem much worse in the long run. Often, serious outbreaks of hibiscus plant pests occur after use of chemicals. Insecticidal soap and horticultural oil are much safer, but shouldn’t be used if you notice beneficial insects on the foliage";
        
    }
    else if(document.getElementById(data).getAttribute("id") == "drag3"){
        document.querySelector(".verdict").innerHTML = "This flower is sunflower. Each sunflower is actually thousands of tiny flowers. Several perennial Helianthus species are grown in gardens, but have a tendency to spread rapidly and can become aggressive. On the other hand, the whorled sunflower, Helianthus verticillatus, was listed as an endangered species in 2014 when the U.S. Fish and Wildlife Service issued a final rule protecting it under the Endangered Species Act. Dark brown lesions on leaves surrounded by a yellow halo; lesions coalesce and become irregularly shaped and cause leaves to become blighted; plant becomes defoliated and dies. Prune out infected leaves; use adequate plant spacing to reduce humidity around plants and promote good air circulation; disease can be controlled by application of appropriate foliar fungicide";
        
    }
    else if(document.getElementById(data).getAttribute("id") == "drag4"){
        document.querySelector(".verdict").innerHTML = "This flower is moonflower. Moonflower's swirl open at dusk to reveal a 6-inch giant white flower. It is a perennial, herbaceous liana growing to a height of 5–30 m tall with twining stems. The leaves are entire or three-lobed, 5–15 cm long, with a 5–20 cm long stem. The flowers are fragrant, white or pink, and large, 8–14 cm diameter. The flowers open quickly in the evening and last through the night, remaining open until touched by the morning dew. On overcast days, the blossoms may remain open for longer. The flowers also tend to remain open longer during cool temperatures - which may also cause the segments to snag or tear as they open.Insufficient light levels are another reason moonflowers may fail to bloom. The flowers might open at night, but the plants need full to partial sun during the day to produce food. Moonflowers don't bloom well in the shade. If you find your flower in too shady a location, all is not lost. You can attempt to train the vine into a more sunny portion of the site. The plants perform well when transplanted from indoors, but morning glories do not like their roots to be disturbed. Established plants may not perform well if transplanted to a new location.";
    }
}