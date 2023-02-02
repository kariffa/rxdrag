import { ReactionType } from "runner/reaction/interfaces/metas";
import { IReactionMaterial } from "../../../../runner/reaction/interfaces/material";
import { delayIcon, endIcon, ifIcon, loopIcon, mergeIcon, randomIcon, startIcon, switchIcon } from "../../icons/reactions";
import { startEndSchema } from "./schemas/base";
import { conditionSchema } from "./schemas/condition";
import { loopSchema } from "./schemas/loop";

export const basicReactions: IReactionMaterial[] = [
  {
    name: "start",
    icon: startIcon,
    label: "$input",
    reactionType: ReactionType.Start,
    meta: {
      name: "input"
    },
    schema: startEndSchema,
  },
  {
    name: "end",
    icon: endIcon,
    label: "$output",
    reactionType: ReactionType.End,
    meta: {
      name: "output"
    },
    schema: startEndSchema,
  },
  {
    name: "condition",
    icon: ifIcon,
    label: "$conditionCheck",
    reactionType: ReactionType.SingleReaction,
    color: "#5e76c3",
    meta: {
      ports: [
        {
          name: "input",
          label: "",//"$inputCondition",
          group: "in",
        },
        {
          name: "true",
          label: "$true",
          group: "out",
        },
        {
          name: "false",
          label: "$false",
          group: "out",
        },
      ],
    },
    schema: conditionSchema
  },
  {
    name: "loop",
    icon: loopIcon,
    label: "$loop",
    reactionType: ReactionType.SingleReaction,
    meta: {
      ports: [
        {
          name: "input",
          label: "",//"$input",
          group: "in",
        },
        {
          name: "output",
          label: "",//"$output",
          group: "out",
        },
      ],
    },
    schema: loopSchema,
  },
  {
    name: "merge",
    icon: mergeIcon,
    label: "$merge",
    reactionType: ReactionType.SingleReaction,
    meta: {
      ports: [
        {
          name: "input1",
          label: "input 1",
          group: "in",
        },
        {
          name: "input2",
          label: "input 2",
          group: "in",
        },
        {
          name: "output",
          label: "",//"$output",
          group: "out",
        },
      ],
    }
  },
  {
    name: "switch",
    icon: switchIcon,
    label: "$switch",
    reactionType: ReactionType.SingleReaction,
    meta: {
      ports: [
        {
          name: "input",
          label: "",//"$input",
          group: "in",
        },
        {
          name: "output1",
          label: "output1",
          group: "out",
        },
        {
          name: "output2",
          label: "output2",
          group: "out",
        },
      ],
    }
  },
  {
    name: "delay",
    icon: delayIcon,
    label: "$delay",
    reactionType: ReactionType.SingleReaction,
    meta: {
      ports: [
        {
          name: "startUp",
          label: "",//"$startUp",
          group: "in",
        },
        {
          name: "output",
          label: "",//"$output",
          group: "out",
        },
      ],
    }
  },
  {
    name: "random",
    icon: randomIcon,
    label: "$random",
    reactionType: ReactionType.SingleReaction,
    meta: {
      ports: [
        {
          name: "startUp",
          label: "",//"$startUp",
          group: "in",
        },
        {
          name: "output",
          label: "",//"$output",
          group: "out",
        },
      ],
    }
  },
]