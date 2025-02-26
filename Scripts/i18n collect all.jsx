#include Tools.jsxinc
#include i18n_tools.jsxinc

i18n.init();
i18n.pushEntry(0, 'd00', '', '');

// Pathfinder Core
i18n.extractFile(new File(baseFolder+'Pathfinder/Core/Character Info.ai'));
i18n.extractFile(new File(baseFolder+'Pathfinder/Core/Combat.ai'));
i18n.extractFolder(new Folder(baseFolder+'Pathfinder/Core'));
i18n.saveCSV(new File(baseFolder+'Languages/Template/Pathfinder - Core.csv'));

// Pathfinder Advanced
i18n.extractFolder(new Folder(baseFolder+'Pathfinder/Advanced'));
i18n.extractFolder(new Folder(baseFolder+'Pathfinder/Ultimate Magic'));
i18n.extractFolder(new Folder(baseFolder+'Pathfinder/Ultimate Combat'));
i18n.extractFolder(new Folder(baseFolder+'Pathfinder/Extra'));
i18n.saveCSV(new File(baseFolder+'Languages/Template/Pathfinder - Advanced.csv'));

// Pathfinder Everything
i18n.extractFolder(new Folder(baseFolder+'Pathfinder/Archetypes'));
i18n.extractFolder(new Folder(baseFolder+'Pathfinder/Mythic'));
i18n.extractFolder(new Folder(baseFolder+'Pathfinder/GM'));

i18n.extractFolder(new Folder(baseFolder+'Pathfinder/Psionics'));
i18n.extractFolder(new Folder(baseFolder+'Pathfinder/Tome of Secrets'));
i18n.extractFolder(new Folder(baseFolder+'Pathfinder/NeoExodus'));

i18n.extractFolder(new Folder(baseFolder+'All'));
i18n.extractFolder(new Folder(baseFolder+'Extra'));
i18n.saveCSV(new File(baseFolder+'Languages/Template/Pathfinder - Everything.csv'));


// 3.5 core
i18n.init();
i18n.pushEntry(0, 'd00', '', '');

i18n.extractFile(new File(baseFolder+'3.5/Core/Character Info - Simple.ai'));
i18n.extractFile(new File(baseFolder+'3.5/Core/Character Info.ai'));
i18n.extractFile(new File(baseFolder+'3.5/Core/Blank Character Info.ai'));
i18n.extractFile(new File(baseFolder+'3.5/Core/Combat - Simple.ai'));
i18n.extractFile(new File(baseFolder+'3.5/Core/Combat.ai'));
i18n.extractFolder(new Folder(baseFolder+'3.5/Core'));
i18n.extractFolder(new Folder(baseFolder+'3.5/Barbarian'));
i18n.saveCSV(new File(baseFolder+'Languages/Template/3.5 - Core.csv'));

i18n.extractFolder(new Folder(baseFolder+'3.5/Extended'));
i18n.extractFolder(new Folder(baseFolder+'3.5/Variants'));
i18n.extractFolder(new Folder(baseFolder+'3.5/Dragon Compendium'));
i18n.extractFolder(new Folder(baseFolder+'3.5/Incarnum'));
i18n.extractFolder(new Folder(baseFolder+'3.5/Psionics'));
i18n.extractFolder(new Folder(baseFolder+'3.5/Tomes'));
i18n.saveCSV(new File(baseFolder+'Languages/Template/3.5 - Everything.csv'));


//  Combine
i18n.init();
i18n.combine(i18n.loadCSV(new File(baseFolder+'Languages/Template/Pathfinder - Everything.csv')));
i18n.combine(i18n.loadCSV(new File(baseFolder+'Languages/Template/3.5 - Everything.csv')));
i18n.renumber();
i18n.saveCSV(new File(baseFolder+'Languages/Template/Everything.csv'));


alert("Done");